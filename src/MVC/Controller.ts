import model from "./Model"
import view from "./View"
import Term from "../classes/Term"
import ModelHelper from "../classes/ModelHelper"
import { Divider, Multiplier } from "../classes/Operators"

type Operator = {
    sign: string,
    operate: Function

}
class Controller {
    model: any
    #view: any
    helper: ModelHelper
    constructor() {
        this.model = model
        this.#view = view
    }
    setButtons() {
        this.#view.setButtons()
    }


    setOperator(input: Operator) {
        if (this.model.getLast() instanceof Term) {
            this.model.operators.push(input)
        } else if (this.model.getLast() != undefined) {
            this.model.replaceLastOp(input)
        }
        this.#view.render()
    }

    setNumber(input: number) {
        if (this.model.getLast() == undefined) {
            this.model.pushTerm(new Term(input))
        } else if (this.model.getLast() instanceof Term) {
            this.model.pushNum(input)
        }
        this.#view.render()
    }
    reset() {
        this.model.clearData()
        this.#view.render()
    }
    errorReset() {
        setTimeout(() => {
            this.reset();
        }, 1500);
    }
    calcResult() {

        const termClone: Array<Term> = this.model.terms.map((term: Term) => term)
        while (opClone.length > 0) {
            this.compute(opClone, termClone)
        }
        this.model.result = this.round(termClone[0].value)
    }
    compute() {
        let index = opClone.findIndex(op => op instanceof Multiplier)
        if (!index) {
            index = opClone.findIndex(op => op instanceof Divider)
        }
        if (!index) { index = 0 }
        const result = opClone[index].operate(termClone[index].value, termClone[index + 1].value)
        termClone.splice(index, 2, new Term(result))
        opClone.splice(index, 1)
    }
    erase() {
        if (this.model.getLast() instanceof Term) {
            this.model.popLastNum()
        } else if (this.model.getLast() != undefined) {
            this.model.popLastOp()
        }
    }
    round(num: number) {
        return (num * 100000) / 100000
    }

}

const controller = new Controller()
export default controller