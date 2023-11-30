import model from "./Model"
import view from "./View"
import Term from "../classes/Term"
import { Plus, Minus, Divider, Multiplier } from "../classes/Operators"

type Operator = {
    sign: string,
    operate: Function
}
class Controller {
    #model: any
    #view: any
    constructor() {
        this.#model = model
        this.#view = view
    }
    setOperator(input: Operator) {
        this.#model.operators.push(input)
        this.#view.render()
    }

    setNumber(input: number) {
        if (this.#model.operators.length >= this.#model.terms.length) {
            this.#model.terms[this.#model.terms.length - 1].pushNum(input)
        } else {
            this.#model.terms.push(new Term(input))
        }
    }
    reset() {
        this.#model.clearData()
        this.#view.render()
    }
    errorReset() {
        setTimeout(() => {
            this.reset();
            this.#view.render()
        }, 1500);
    }
    calcResult() {
        const opClone: Array<Operator> = this.#model.operators.map((op: Operator) => op)
        const termClone: Array<Term> = this.#model.terms.map((term: Term) => term)
        while (opClone.length > 0) {
            this.compute(opClone, termClone)
        }
        this.#model.result = this.round(termClone[0].value)
    }
    compute(opClone: Array<Operator>, termClone: Array<Term>) {
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
        this.#model.data.pop()
    }
    round(num: number) {
        return (num * 100000) / 100000
    }
}

const controller = new Controller()
controller.constructor = () => { return controller };
export default controller