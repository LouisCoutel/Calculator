

class Plus {
    sign: string
    constructor() {
        this.sign = "+"
    }

    operate(a: number, b: number) {
        const result: number = a + b
        return result
    }
}
class Minus {
    sign: string
    constructor() {
        this.sign = "-"
    }
    operate(a: number, b: number) {
        const result: number = a - b
        return result
    }
}
class Multiplier {
    sign: string
    constructor() {
        this.sign = "*"
    }
    operate(a: number, b: number) {
        const result: number = a * b
        return result
    }
}

class Divider {
    sign: string
    constructor() {
        this.sign = "/"
    }
    operate(a: number, b: number) {
        if (b) {
            const result: number = a / b
            return result
        } else { throw new Error('Cannot divide by (0)') }
    }
}

export { Plus, Minus, Multiplier, Divider }