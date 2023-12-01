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
        this.buttons = new Buttons
        this.displayData = []
        this.model = model
    }

    render() {
        this.displayData = []
        for (let i = 0; i < this.model.terms.getLength(); i++) {
            this.displayData.push(this.model.terms.getAtIndex(i).value.toString())
            if (this.model.operators[0]) {
                this.displayData.push(this.model.operators.getAtIndex(i).sign)
            }
        }
    }
}

const view = new View
export default view