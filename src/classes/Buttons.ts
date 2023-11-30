import controller from "../MVC/Controller"
import { Minus, Plus, Divider, Multiplier } from "./Operators"
type Operator = {
  sign: string,
  operate: Function
}
function $(id: string) {
  return document.getElementById(id) as HTMLElement

}



const buttonList = {
  digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  operators: ["+", "-", "/", "*"],
  backspace: "backspace",
  float: "float",
  equal: "=",
  clear: "CLR"
}

class Buttons {
  digitsButtons: Array<any>
  opsButtons: Array<any>
  backspaceButton: any
  equalButton: any
  floatButton: any
  clearButton: any
  constructor() {
    this.digitsButtons = buttonList.digits.map((el: string) => new DigitButton(el))
    this.opsButtons = buttonList.operators.map((el: string) => {
      if (el == "+") {
        return new PlusButton
      }
      if (el == "-") {
        return new MinusButton
      }
      if (el == "*") {
        return new MultiplierButton
      }
      if (el == "/") {
        return new DividerButton
      }
    })
    this.backspaceButton = new BackspaceButton
    this.equalButton = new EqualButton
    this.floatButton = new FloatButton
    this.clearButton = new ClearButton
  }
}

class Button {
  controller: any
  constructor() {
    this.controller = controller
  }
}

class DigitButton extends Button {
  value: number
  id: string

  element: HTMLElement
  constructor(input: string) {
    super()
    this.value = parseFloat(input)
    this.id = input
    this.element = $(input)
    this.element.onclick = () => {
      this.controller.setNumber(this.value)
    }
  }
}


class PlusButton extends Button {
  id: string
  element: HTMLElement
  constructor() {
    super()
    this.id = "+"
    this.element = this.element = $("+")
    this.element.onclick = () => {
      this.controller.setOperator(new Plus)
    }
  }
}
class MinusButton extends Button {
  id: string
  element: HTMLElement
  constructor() {
    super()
    this.id = "-"
    this.element = this.element = $("-")
    this.element.onclick = () => {
      this.controller.setOperator(new Minus)
    }
  }
}
class DividerButton extends Button {
  id: string
  element: HTMLElement
  constructor() {
    super()
    this.id = "/"
    this.element = this.element = $("/")
    this.element.onclick = () => {
      this.controller.setOperator(new Divider)
    }
  }
}
class MultiplierButton extends Button {
  id: string
  element: HTMLElement
  constructor() {
    super()
    this.id = "*"
    this.element = this.element = $("*")
    this.element.onclick = () => {
      this.controller.setOperator(new Multiplier)
    }
  }
}

class FloatButton extends Button {
  element: HTMLElement
  constructor() {
    super()
    this.element = $("float")
    this.element.onclick = () => {
      this.controller.addFloat()
    }
  }
}

class BackspaceButton extends Button {
  element: HTMLElement
  constructor() {
    super()
    this.element = $("backspace")
    this.element.onclick = () => {
      this.controller.clear()
    }
  }
};

class EqualButton extends Button {
  element: HTMLElement
  constructor() {
    super()
    this.element = $("=")
    this.element.onclick = () => {
      this.controller.compute(this.element)
    }
  }
}

class ClearButton extends Button {
  element: HTMLElement
  constructor() {
    super()
    this.element = $("CLR")
    this.element.onclick = () => {
      this.controller.erase()
    }
  }
}


export default Buttons