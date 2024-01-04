import { mFactory, vFactory } from "../classes/Factory"
import Term from "../classes/Term"
import { model, operator, view } from "../utils/types"

class Controller {
    model: model
    view: view
    constructor() {
        this.model = mFactory.getInstance()
        this.view = vFactory.getInstance()
    }
    setResultAsFirstTerm() {
        this.model.terms.clear()
        this.model.operators.clear()
        this.model.terms.pushNew(this.model.result as number)
        this.model.result = undefined
    }
    setOperator(input: operator) {
        if (this.model.result) {
            this.setResultAsFirstTerm()
            this.model.operators.pushNew(input)
        } else if (this.model.getLast() instanceof Term) {
            this.model.operators.pushNew(input)
        } else if (this.model.getLast() != undefined) {
            this.model.operators.replaceLast(input)
        }
        this.refreshView()
    }
    setNumber(input: number) {
        if (this.model.result) {
            this.setResultAsFirstTerm()
            this.model.terms.pushNumToLast(input)
        } else if (this.lastIsTerm() == false) {
            this.model.terms.pushNew(input)
        } else if (this.model.getLast() != undefined) {
            this.model.terms.pushNumToLast(input)
        }
        this.refreshView()
    }
    reset() {
        this.model.clearData()
        this.refreshView()
    }
    async errorReset() {
        setTimeout(() => {
            this.reset();
        }, 1500);
    }
    refreshView() {
        this.model.setDisplayData()
        this.view.render(this.model.displayData, this.model.result)
    }
    erase() {
        if (this.model.getLast() instanceof Term) {
            if (this.model.getLast().getLength() <= 1) {
                this.model.terms.pop()
            } else {
                this.model.getLast().popNum()
            }
        } else if (this.model.getLast() != undefined) {
            this.model.operators.pop()
        }
        this.refreshView()
    }
    launchCompute() {
        try {
            this.model.calcResult()
        } catch (error) {
            this.errorReset()
        }
        this.refreshView()
    }
    lastIsTerm() {
        return this.model.getLast() instanceof Term
    }
    setFloat() {
        if (this.lastIsTerm()) {
            this.model.terms.getLast().setFloat()
            this.model.displayData.push(".")
        } else if (this.model.getLast() == undefined) {
            this.model.terms.pushNew(0)
            this.model.getLast().setFloat()
            this.model.displayData.push("0.")
        }
        this.view.render(this.model.displayData, this.model.result)
    }
    loadView() {
        this.view.setButtons()
        this.view.setDisplay()
    }
}

export default Controller