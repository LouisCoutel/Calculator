type Float = "."

class Term {
    value: number
    valArr: Array<number>
    float: boolean
    floatIndex: number | undefined
    constructor(init: number | Float) {
        if (init == ".") {
            this.valArr = [0]
            this.value = 0
            this.float = true
            this.floatIndex = 0
        } else {
            this.valArr = [init]
            this.value = init
            this.float = false
        }
    }
    getLength() {
        return this.valArr.length
    }
    getLast() {
        return this.valArr[this.getLength() - 1]
    }
    getValue() {
        if (this.float == true) {
            this.value = parseFloat(
                this.valArr.slice(0, this.floatIndex).join("")
                + "." +
                this.valArr.slice(this.floatIndex).join(""))
        } else {
            this.value = parseFloat(this.valArr.join(""))
        }
    }
    setFloat() {
        if (!Number.isInteger(this.value)) {
            throw new Error("Cannot set more than one floating point")
        } else {
            this.float = true
            this.floatIndex = this.getLength()
        }
    }
    pushNum(input: number) {
        this.valArr.push(input)
        this.getValue()
    }
    popNum() {
        if (this.float) {
            if (this.floatIndex == this.valArr.length) {
                this.float = false
                this.floatIndex = 0
            }
        } else {
            this.valArr.pop()
        }
        this.getValue()
    }
}

export default Term