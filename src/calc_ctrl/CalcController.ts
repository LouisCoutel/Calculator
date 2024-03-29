import { mFactory, vFactory } from "../data_classes/Factory"
import Term from "../data_classes/Term"
import { model, operator, term, view } from "../utils/customTypes"

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
        this.model.terms.pushNewTerm(this.model.result as number)
        this.model.result = undefined
    }

    setOperator(input: operator) {
        if (this.model.result) {
            this.setResultAsFirstTerm()
            this.model.operators.pushNewOp(input)
        } else if (this.model.getLast() instanceof Term) {
            this.model.operators.pushNewOp(input)
        } else if (this.model.getLast() != undefined) {
            this.model.operators.replaceLastOp(input)
        }

        this.refreshView()
    }

    setNumber(input: number) {
        if (this.model.result) {
            this.setResultAsFirstTerm()
            this.model.terms.pushNumToLast(input)
        } else if (this.lastIsTerm() == false) {
            this.model.terms.pushNewTerm(input)
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
            this.reset()
        }, 1500)
    }

    refreshView() {
        this.model.setDisplayData()
        this.view.render(this.model.displayData, this.model.result)
    }

    erase() {
        const lastEntered = this.model.getLast()
        if (lastEntered instanceof Term) {
            if (lastEntered.getArrLength() <= 1) {
                this.model.terms.pop()
            } else {
                lastEntered.popNumFromArr()
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
            this.model.terms.pushNewTerm(0)
            const newTerm = this.model.getLast() as term
            newTerm.setFloat()
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
