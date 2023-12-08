import { Buttons } from "../components/Buttons"
import Display from "../components/Display"

class View {
    declare display: Display
    declare buttons: Buttons
    render(inputData: Array<string | number>, resultData: number | undefined) {
        this.display.setInput(inputData.join(" "))
        if (resultData) {
            this.display.setResult(resultData.toString())
        } else this.display.setResult("")
    }
    setButtons() {
        this.buttons = new Buttons
    }
    setDisplay() {
        this.display = new Display
    }
}

export default View