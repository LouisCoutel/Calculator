function $(id: string) {
  const returned = document.getElementById(id)
  const el: HTMLElement = returned as HTMLElement
  return el
}

class Buttons {
  digitsButtons: Array<any>
  opsButtons: Array<any>
  backspaceButton: any
  equalButton: any
  floatButton: any
  clearButton: any
  constructor(buttonList: any) {
    this.digitsButtons = buttonList.digits.map((el: string) => new DigitButton(el))
    this.opsButtons = buttonList.operators.map((el: string) => new OperatorButton(el))
    this.backspaceButton = new BackspaceButton(buttonList.backspace)
    this.equalButton = new EqualButton(buttonList.equal)
    this.floatButton = new FloatButton(buttonList.float)
    this.clearButton = new ClearButton(buttonList.clear)
  }
}



class Button {
  element: HTMLElement
  value: string

  constructor(input: string) {
    this.element = $(input)
    this.value = input
  }
}

class DigitButton extends Button {
  type: string
  constructor(input: string) {
    super(input)
    this.type = "digit"
  }
}

class OperatorButton extends Button {
  type: string
  constructor(input: string) {
    super(input)
    this.type = "operator"
  }
}

class FloatButton extends Button {
  type: string
  constructor(input: string) {
    super(input)
    this.type = "float"
  }
}

class BackspaceButton extends Button {
  type: string
  constructor(input: string) {
    super(input)
    this.type = "backspace"
  }
};

class EqualButton extends Button {
  type: string
  constructor(input: string) {
    super(input)
    this.type = "equal"
  }
}

class ClearButton extends Button {
  type: string
  constructor(input: string) {
    super(input)
    this.type = "clear"
  }
}


export default Buttons