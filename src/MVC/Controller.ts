import model from "./Model"
import view from "./View"
import Term from "../classes/Term"
import { Operator } from "../utils/types"

class Controller {
    model: any
    view: any

    constructor() {
        this.model = model
        this.view = view
    }

    setButtons() {
        this.view.setButtons()
    }
    setOperator(input: Operator) {
        if (this.model.getLast() instanceof Term) {
            this.model.operators.pushNew(input)
        } else if (this.model.getLast() != undefined) {
            this.model.operators.replaceLast(input)
        }
        this.view.render()
    }
    setNumber(input: number) {
        if (this.model.getLast() instanceof Term == false) {
            this.model.terms.pushNew(input)
        } else if(this.model.getLast() != undefined){
            this.model.terms.pushNumToLast(input)
        }
        this.view.render()
    }
    reset() {
        this.model.clearData()
        this.view.render()
    }
    errorReset() {
        setTimeout(() => {
            this.reset();
        }, 1500);
    }
    erase() {
        if (this.model.getLast() instanceof Term) {
            this.model.terms.pop()
        } else if (this.model.getLast() != undefined) {
            this.model.operators.pop()
        }
    }
    launchCompute() {
        this.model.calcResult()
    }
}

const controller = new Controller()
export default controller