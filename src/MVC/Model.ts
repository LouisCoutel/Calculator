import { TermsArray, OperatorsArray, OpsArrClone, TermsArrClone } from '../classes/DataArray'

class Model {
    terms: TermsArray
    operators: OperatorsArray
    result: number | undefined
    displayData: Array<string | number>

    constructor() {
        this.terms = new TermsArray
        this.operators = new OperatorsArray
        this.result = undefined
        this.displayData = []
    }

    clearData() {
        this.terms.clear()
        this.operators.clear()
        this.result = undefined
    }
    getLast() {
        if (this.terms.getLength() == 0) {
            return undefined
        }
        if (this.operators.getLength() >= this.terms.getLength()) {
            return this.operators.getLast()
        } else {
            return this.terms.getLast()
        }
    }
    calcResult() {
        const termsClone = new TermsArrClone(this.terms.data.map(item => item))
        const opClone = new OpsArrClone(this.operators.data.map(item => item))
        while (opClone.getLength() > 0) {
            this.compute(opClone, termsClone)
        }
        this.result = termsClone.getFinalResult()
    }
    compute(opsClone: OpsArrClone, termsClone: TermsArrClone) {
        let index = opsClone.getIndexOfMult()
        if (!index) {
            index = opsClone.getIndexOfDiv()
        }
        if (!index) {
            index = 0
        }
        const result = opsClone.getAtIndex(index).operate(termsClone.getAtIndex(index).value, termsClone.getAtIndex(index + 1).value)

        termsClone.replaceByResult(index, result)
        opsClone.removeAtIndex(index)
    }
    setDisplayData() {
        this.displayData = []
        for (let i = 0; i < this.terms.getLength(); i++) {
            console.log(this.displayData)
            console.log(this.terms.data)
            this.displayData.push(this.terms.getAtIndex(i).value)
            if (this.operators.getAtIndex(i)) {
                this.displayData.push(this.operators.getAtIndex(i).sign)
            }
        }
    }
}
export default Model