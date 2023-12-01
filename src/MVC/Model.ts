import { TermsArray, OperatorsArray, OpsArrClone, TermsArrClone } from '../classes/DataArray'

class Model {
    terms: TermsArray
    operators: OperatorsArray
    result: number
    constructor() {
        this.terms = new TermsArray
        this.operators = new OperatorsArray
        this.result = 0
    }
    clearData() {
        this.terms.clear()
        this.operators.clear()
        this.result = 0
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
        const termsClone = new TermsArrClone(this.terms.data)
        const opClone = new OpsArrClone(this.operators.data)
        while (opClone.getLength() > 0) {
            this.compute(opClone, termsClone)
        }
        this.result = termsClone.getFinalResult()
    }
    compute(opsClone: OpsArrClone, termsClone: TermsArrClone) {
        let index = opsClone.getIndexOfMult()
        if (!index) {
            index = opsClone.getIndexOfMult()
        }
        if (!index) {
            index = 0
        }
        const result = opsClone.getAtIndex(index).operate(termsClone.getAtIndex(index).value, termsClone.getAtIndex(index + 1).value)
        termsClone.replaceByResult(index, result)
        opsClone.removeAtIndex(index)
    }
}
const model = new Model
export default model