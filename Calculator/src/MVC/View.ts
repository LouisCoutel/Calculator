import Buttons from "../classes/Buttons"
import model from "./Model"
// W.I.P

class View {
    id: string
    // screen: HTMLElement
    buttons: any
    model: any

    displayData: Array<string>
    constructor() {
        this.id = "screen"
        // this.screen = document.getElementById(this.id) as HTMLElement
        this.displayData = []
        this.model = model
    }

    setButtons() {
        this.buttons = new Buttons
    }

    render() {
        this.displayData = []
        for (let i = 0; i < this.model.terms.length; i++) {
            this.displayData.push(this.model.terms[i].value.toString())
            if (this.model.operators[0]) {
                this.displayData.push(this.model.operators[i].sign)
            }
        }
    }
}
const view = new View
export default view