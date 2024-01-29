abstract class Operator {
    sign: string
    constructor() {
        this.sign = ""
    }

    abstract operate(numA: number, numB: number): number
}

class Plus extends Operator {
    constructor() {
        super()
        this.sign = "+"
    }

    operate(a: number, b: number) {
        return a + b
    }
}

class Minus extends Operator {
    constructor() {
        super()
        this.sign = "-"
    }

    operate(a: number, b: number) {
        return a - b
    }
}

class Multiplier extends Operator {
    constructor() {
        super()
        this.sign = "*"
    }

    operate(a: number, b: number) {
        return a * b
    }
}

class Divider extends Operator {
    constructor() {
        super()
        this.sign = "/"
    }

    operate(a: number, b: number) {
        if (b) {
            return a / b
        } else {
            throw new Error("Cannot divide by (0)")
        }
    }
}

export { Operator, Plus, Minus, Multiplier, Divider }
