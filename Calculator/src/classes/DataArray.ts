import { operator } from "../utils/types"
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

    pop() {
        this.data.pop()
    }
    getAtIndex(index: number) {
        return this.data[index]
    }
}

export class OperatorsArray extends DataArray {
    data: Array<operator>

    constructor() {
        super()
        this.data = []
    }

    getIndexOfMult() {
        const i = this.data.findIndex(op => op instanceof Multiplier)
        if (i >= 0) { return i } else { return undefined }
    }
    getIndexOfDiv() {
        const i = this.data.findIndex(op => op instanceof Divider)
        if (i >= 0) { return i } else { return undefined }
    }
    pushNew(op: operator) {
        this.data.push(op)
    }
    replaceLast(input: operator) {
        this.data.splice((this.getLength() - 1), 1, input)
    }

}
export class OpsArrClone extends OperatorsArray {
    data: Array<operator>

    constructor(originalData: Array<operator>) {
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
        return Math.round(num * 10000000) / 10000000
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
            return this.round(this.getLast().value)
        }
        else {
            throw new Error("Cannot get final result, not all terms have been computed")
        }
    }


}

