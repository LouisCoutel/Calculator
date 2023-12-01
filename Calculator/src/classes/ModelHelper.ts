class ModelHelper {
    model: Model
    termsClone: Array<Term>
    opsClone: Array<Operator>
    constructor(model: Model) {
        this.model = model
        this.termsClone = []
        this.opsClone = []
    }
    pushTerm(term: Term) {
        this.model.terms.push(term)
    }

    pushNum(num: number) {
        this.getLastTerm().pushNum(num)
    }
    clearData() {
        this.model.terms = []
        this.model.operators = []
        this.model.result = 0
    }
    getLast() {
        if (this.getTermsLength() == 0) {
            return undefined
        }
        if (this.getOpsLength() >= this.getTermsLength()) {
            return this.getLastOp()
        } else {
            return this.getLastTerm()
        }
    }

    geIndexOfMult() {
        return this.model.operators.findIndex(op => op instanceof Multiplier)
    }
    getIndexOfDiv() {
        return this.model.operators.findIndex(op => op instanceof Divider)
    }

    cloneOperators() {
        return this.model.operators.map(op => op)
    }

    cloneTerms() {
        return this.model.terms.map(term => term)
    }
    getOpsLength() {
        return this.model.operators.length
    }
    getTermsLength() {
        return this.model.terms.length
    }
    getLastTerm() {
        return this.model.terms[this.getTermsLength() - 1]
    }
    getLastOp() {
        return this.model.operators[this.getOpsLength() - 1]
    }
    replaceLastOp(input: Operator) {
        this.model.operators.splice((this.getOpsLength() - 1), 1, input)
    }
    popLastNum() {
        const lastTerm = this.getLastTerm()
        lastTerm.popNum()
    }
    popLastOp() {
        this.model.operators.pop()
    }
}

export default ModelHelper