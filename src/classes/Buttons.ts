import controller from "../MVC/Controller"
// import { Minus, Plus, Divider, Multiplier } from "./Operators"
import { $ } from "../utils/functions"


class Buttons {
  digitsButtons: Array<DigitButton>
  opsButtons: Array<Button>
  backspaceButton: BackspaceButton
  equalButton: EqualButton
  floatButton: FloatButton
  clearButton: ClearButton
  constructor() {
    this.digitsButtons = []
    for (let i = 0; i < 10; i++) {
      this.digitsButtons.push(new DigitButton(i))
    }
    this.opsButtons = [new PlusButton, new MinusButton, new DividerButton, new MultiplierButton]
    this.backspaceButton = new BackspaceButton
    this.equalButton = new EqualButton
    this.floatButton = new FloatButton
    this.clearButton = new ClearButton
  }
}

class Button {
  id: string
  controller: any
  element: HTMLElement | undefined
  constructor() {
    this.controller = controller
    this.element = undefined
    this.id = ""
  }
}

class DigitButton extends Button {
  value: number
  constructor(input: number) {
    super()
    this.value = input
    this.id = input.toString()
    this.element = $(this.id)
    // this.element.onclick = () => {
    //   this.controller.setNumber(this.value)
    // }
  }
}

class PlusButton extends Button {
  constructor() {
    super()
    this.id = "+"
    this.element = $("+")
    // this.element.onclick = () => {
    //   this.controller.setOperator(new Plus)
    // }
  }
}

class MinusButton extends Button {
  constructor() {
    super()
    this.id = "-"
    this.element = $("-")
    // this.element.onclick = () => {
    //   this.controller.setOperator(new Minus)
    // }
  }
}

class DividerButton extends Button {
  constructor() {
    super()
    this.id = "/"
    this.element = $("/")
    // this.element.onclick = () => {
    //   this.controller.setOperator(new Divider)
    // }
  }
}

class MultiplierButton extends Button {
  constructor() {
    super()
    this.id = "*"
    this.element = $("*")
    // this.element.onclick = () => {
    //   this.controller.setOperator(new Multiplier)
    // }
  }
}

class FloatButton extends Button {
  constructor() {
    super()
    this.element = $("float")
    // this.element.onclick = () => {
    //   this.controller.addFloat()
    // }
  }
}

class BackspaceButton extends Button {
  element: HTMLElement
  constructor() {
    super()
    this.element = $("backspace")
    // this.element.onclick = () => {
    //   this.controller.erase()
    // }
  }
}

class EqualButton extends Button {
  element: HTMLElement
  constructor() {
    super()
    this.element = $("=")
    // this.element.onclick = () => {
    //   this.controller.compute(this.element)
    // }
  }
}

class ClearButton extends Button {
  element: HTMLElement
  constructor() {
    super()
    this.element = $("CLR")
    // this.element.onclick = () => {
    //   this.controller.reset()
    // }
  }
}

export default Buttons