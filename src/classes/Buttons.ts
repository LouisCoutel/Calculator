import controller from "../MVC/Controller"
import { Minus, Plus, Divider, Multiplier } from "./Operators"

function $(id: string) {
  return document.getElementById(id) as HTMLElement
}

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
  controller: any
  constructor() {
    this.controller = controller
  }
}

class DigitButton extends Button {
  value: number
  id: string
  element: HTMLElement
  constructor(input: number) {
    super()
    this.value = input
    this.id = input.toString()
    this.element = $(this.id)
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