import Buttons from "../classes/Buttons"
import model from "./Model"
 import { $ } from "../utils/functions"
class View {
    screen: HTMLElement
    buttons: any
    model: any
    displayData: Array<string>

    constructor() {
        this.screen = $("screen")
        this.displayData = []
        this.model = model
    }
    setButtons() {this.buttons = new Buttons}
    render() {
        this.displayData = []
        for (let i = 0; i < this.model.terms.getLength(); i++) {
            this.displayData.push(this.model.terms.getAtIndex(i).value)
            if (this.model.operators.getAtIndex(i)) {
                this.displayData.push(this.model.operators.getAtIndex(i).sign)
            }
        }
        this.screen.innerText = this.displayData.join(" ")
    }
}

const view = new View
export default view