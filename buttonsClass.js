import Calculator from "./calcClass"

function log(value) {
  return console.log(value)
}

function $(id) {
  return document.getElementById(id)
}

class Buttons {
  constructor(buttonList, parent) {
    this.parent = parent
    this.buttonList = buttonList
  }
  initSubClasses() {
    this.digitsButtons = this.buttonList.digits.map(el => new DigitButton(el))
    this.opsButtons = this.buttonList.operators.map(el => new OperatorButton(el))
    this.backspaceButton = new BackspaceButton(this.buttonList.backspace)
    this.equalButton = new EqualButton(this.buttonList.equal)
    this.floatButton = new FloatButton(this.buttonList.float)
    this.ClearButton = new ClearButton(this.buttonList.clear)
  }

}

class Button {
  constructor(input) {
    this.element = $(input);
    this.value = input
    this.element.onclick = this.action()
  }

  action() {
    log("undefined button")
  }
}

class DigitButton extends Button {
  display() {
    calculator.concatToScreenDisplay(this.value)
  }

  compute() {
    calculator.setNumber(this.value)
  }
  action() {
    this.display()
    this.compute()
    calculator.actualize();
  }
}

class OperatorButton extends Button {
  display() {
    // display operator with spaces on either side
    calculator.concatToScreenDisplay(" " + this.value + " ")
  }
  compute() {
    calculator.setOperator(this.value)
    calculator.incOpCounter()
    calculator.actualize();
  }
  action() {
    this.display()
    this.compute()
  }
}

class FloatButton extends Button {
  action() {
    // if we're starting from fresh and user didn't input a 0 before the dot, add a zero in front of it for convenience
    calculator.addFloat();
    calculator.actualize();
  };
}

class BackspaceButton extends Button {
  action() {
    if (calculator.checkInit()) {
      calculator.delLast()
      // if we're not starting over, remove last character from display string
      // check if the last char is an operator
      if (calculator.checkNotOp()) {
        // if the last input isn't and is a number or a dot, remove last character from current "number" array element
        calculator.delScreenDisplay(-1)
        calculator.delNumbers()
        // if last char is a space
      } else {
        // remove last 3 char from display
        calculator.delScreenDisplay(-3)
        // and remove from operator array
        calculator.backToPrevNumber()

        // check if there's still a number stored in the array, meaning there is a number before the operator we just removed
        if (calculator.checkForNumber()) {
          // actualize number counter to switch to last number still stored
          calculator.decCounter()
          calculator.backToPrevOp()
        }
      }
    }
  };
};

class EqualButton extends Button {
  action() {
    // convert all "number" elements from array into floating points numbers rounded to last 5 digits after dot
    calculator.toActualNumbers()
    // for each operator stored in array
    calculator.compute()
    calculator.displayResult()
  };
}

class ClearButton extends Button {
  action() {
    calculator.reset();
  }
}


export default { Buttons, Button, FloatButton, ClearButton, EqualButton, DigitButton, OperatorButton, BackspaceButton }