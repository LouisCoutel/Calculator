import { Operator } from "../utils/types"
import Term from "./Term"
import { Multiplier, Divider } from "./Operators"

export class DataArray {
    data: Array<any>

    constructor() {
        this.data = []
    }

    clear() {
        this.data = []
    }
    clone() {
        return this.data.map(op => op)
    }
    getLength() {
        return this.data.length
    }
    getLast() {
        return this.data[this.getLength() - 1]
    }
    getAtIndex(index: number) {
        return this.data[index]
    }
    pop() {
        this.data.pop()
    }
}

export class OperatorsArray extends DataArray {
    data: Array<Operator>

    constructor() {
        super()
        this.data = []
    }

    clear() {
        this.data = []
    }
    geIndexOfMult() {
        return this.data.findIndex(op => op instanceof Multiplier)
    }
    getIndexOfDiv() {
        return this.data.findIndex(op => op instanceof Divider)
    }
    pushNew(op: Operator) {
        this.data.push(op)
    }
    replaceLast(input: Operator) {
        this.data.splice((this.getLength() - 1), 1, input)
    }
}
export class OpsArrClone extends OperatorsArray {
    data: Array<Operator>

    constructor(originalData: Array<Operator>) {
        super()
        this.data = originalData
    }
    removeAtIndex(index: number) {
        this.data.splice(index, 1)
    }
}

export class TermsArray extends DataArray {
    data: Array<Term>

    constructor() {
        super()
        this.data = []
    }

    pushNew(val: number) {
        this.data.push(new Term(val))
    }
    pushNumToLast(num: number) {
        this.getLast().pushNum(num)
    }
    round(num: number) {
        return (num * 100000) / 100000
    }
}

export class TermsArrClone extends TermsArray {
    data: Array<Term>

    constructor(originalData: Array<Term>) {
        super()
        this.data = originalData
    }

    replaceByResult(index: number, val: number) {
        this.data.splice(index, 2, new Term(val))
    }
    getFinalResult() {
        if (this.getLength() > 0) {
            return this.getLast().value
        }
        else {
            throw new Error("Cannot get final result, not all terms have been computed")
        }
    }
}

