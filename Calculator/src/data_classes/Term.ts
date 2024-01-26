class Term {
    value: number
    valArr: Array<number>
    float: boolean
    floatIndex: number | undefined

    constructor(init: number) {
        this.valArr = [init]
        this.value = init
        this.float = false
    }

    getArrLength() {
        return this.valArr.length
    }

    getLastDigit() {
        return this.valArr[this.getArrLength() - 1]
    }

    getTermValue() {
        if (this.float == true) {
            this.value = parseFloat(
                this.valArr.slice(0, this.floatIndex).join("") + "." + this.valArr.slice(this.floatIndex).join("")
            )
        } else {
            this.value = parseFloat(this.valArr.join(""))
        }
    }

    setFloat() {
        if (!Number.isInteger(this.value)) {
            throw new Error("Cannot set more than one floating point")
        } else {
            this.float = true
            this.floatIndex = this.getArrLength()
        }
    }

    pushNumToArr(input: number) {
        this.valArr.push(input)
        this.getTermValue()
    }

    popNumFromArr() {
        if (this.float) {
            if (this.floatIndex == this.valArr.length) {
                this.float = false
                this.floatIndex = 0
            }
        } else {
            this.valArr.pop()
        }

        this.getTermValue()
    }
}

export default Term
