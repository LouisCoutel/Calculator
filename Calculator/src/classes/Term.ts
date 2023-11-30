type Float = "."

class Term {
    value: number
    valArr: Array<number>

    float: boolean
    floatIndex: number | undefined
    constructor(init: number | Float) {
        if (init == ".") {
            this.valArr = []
            this.value = 0
            this.float = true
        } else {
            this.valArr = [init]
            this.value = init
            this.float = false
            this.floatIndex = 0
        }
    }



    getValue() {
        if (this.float = true) {
            this.value = parseFloat(
                this.valArr.slice(0, this.floatIndex).join()
                + "." +
                this.valArr.slice(this.floatIndex).join())
        } else {
            this.value = parseFloat(this.valArr.join())
        }
    }

    setFloat() {
        if (!Number.isInteger(this.value)) {
            throw new Error("Cannot set more than one floating point")
        } else {
            this.float = true
            this.floatIndex = (this.valArr.length)
        }
    }

    pushNum(input: number) {
        this.valArr.push(input)
    }
}

export default Term