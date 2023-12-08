import { $ } from "../utils/functions"

class Display {
    element: HTMLElement
    inputDisplay: HTMLElement
    resultDisplay: HTMLElement
    constructor() {
        this.element = $("display")
        this.inputDisplay = $("inputDisplay")
        this.resultDisplay = $("resultDisplay")
    }
    setResult(str: string) {
        this.resultDisplay.innerText = str
    }
    setInput(str: string) {
        this.inputDisplay.innerText = str
    }

}

export default Display