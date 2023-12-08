import { cFactory } from "../classes/Factory"
import { Minus, Plus, Divider, Multiplier, Operator } from "../classes/Operators"
import { $ } from "../utils/functions"
import { controller } from "../utils/types"

class Buttons {
  digitsButtons: Array<DigitButton>
  opsButtons: Array<OperatorButton>
  backspaceButton: BackspaceButton
  equalButton: EqualButton
  floatButton: FloatButton
  clearButton: ClearButton
  constructor() {
    this.digitsButtons = []
    for (let i = 0; i < 10; i++) {
      const el = $(i.toString())
      this.digitsButtons.push(new DigitButton(el))
    }
    const ops = ["+", "-", "/", "*"]
    this.opsButtons = ops.map(op => {
      const el = $(op)
      return new OperatorButton(el)
    })
    this.backspaceButton = new BackspaceButton($("backspace"))
    this.equalButton = new EqualButton($("="))
    this.floatButton = new FloatButton($("float"))
    this.clearButton = new ClearButton($("CLR"))
  }
}
class Button {
  declare element: HTMLElement
  declare controller: controller
  constructor() {
    this.controller = cFactory.getInstance()
  }
}
class DigitButton extends Button {
  value: number
  constructor(element: HTMLElement) {
    super()
    this.element = element
    this.value = parseInt(element.id)
    this.element.onclick = () => { this.controller.setNumber(this.value) }
  }
}
class OperatorButton extends Button {
  operator: Operator
  constructor(element: HTMLElement) {
    super()
    this.element = element
    this.operator = this.setOp(element.id) as Operator
    this.element.onclick = () => { this.controller.setOperator(this.operator) }
  }
  setOp(id: string) {
    if (id == "+") {
      return new Plus
    } else if (id == "-") {
      return new Minus
    } else if (id == "/") {
      return new Divider
    } else if (id == "*") {
      return new Multiplier
    }
  }
}
class FloatButton extends Button {
  constructor(element: HTMLElement) {
    super()
    this.element = element
    this.element.onclick = () => { this.controller.setFloat() }
  }
}
class BackspaceButton extends Button {
  constructor(element: HTMLElement) {
    super()
    this.element = element
    this.element.onclick = () => { this.controller.erase() }
  }
}
class EqualButton extends Button {
  constructor(element: HTMLElement) {
    super()
    this.element = element
    this.element.onclick = () => { this.controller.launchCompute() }
  }
}
class ClearButton extends Button {
  constructor(element: HTMLElement) {
    super()
    this.element = element
    this.element.onclick = () => { this.controller.reset() }
  }
}
export { Buttons, DigitButton, OperatorButton, FloatButton, EqualButton, ClearButton, BackspaceButton }