class Engine {
    #numbers: Array
    #operators: Array
    #counter: Number
    #opCounter: Number
    #lastEntered: String

    constructor() {
        this.#numbers = [];
        this.#operators = [];
        this.#counter = 0;
        this.#opCounter = 0;
        this.#lastEntered = undefined;
    }

    add(a: Number, b: Number) {
        const result: Number = a + b;
        if (result != 0) {
            return result;
        } else {
            return 0;
        }
    };

    subtract(a: Number, b: Number) {
        const result: Number = a - b;
        if (result != 0) {
            return result;
        } else {
            return 0;
        }
    };

    multiply(a: Number, b: Number) {
        const result: Number = a * b;
        if (result != 0) {
            return result;
        } else {
            return 0;
        }
    };

    divide(a: Number, b: Number) {
        const result: Number = a / b;
        if (result != 0) {
            return result;
        } else {
            return 0;
        }
    };

    get lastEntered() {
        return this.#lastEntered
    }
    get opCounter() {
        return this.#opCounter
    }
    get counter() {
        return this.#counter
    }
    get operators() {
        return this.#operators
    }
    get numbers() {
        return this.#numbers
    }


    set lastEntered(value: String) {
        this.#lastEntered = value
    }
    set opCounter(value: String) {
        this.#opCounter = value
    }
    set counter(value: String) {
        this.#counter = value
    }
    set operators(value: String) {
        this.#operators = value
    }
    set numbers(value: String) {
        this.#numbers = value
    }

    reset() {
        // reset number counter so that input goes to first "number"
        this.counter = 0
        // remove all existing elements from number array, leaving it "undefined" so that we start from fresh
        this.numbers.splice(0, this.numbers.length);
        // remove all elements from operator array
        this.operators = [];
        this.lastEntered = undefined;
    }

    getResult() {
        return (this.numbers[0] * 100000) / 100000
    }

    #concatToNumbers(input: String) {
        this.#numbers[this.counter] += input
    }

    #initNumbers(input: String) {
        this.#numbers[this.counter] = input
    }

    setNumber(input: String) {
        if (this.numbers[this.counter] != undefined) {
            this.#concatToNumbers(input)
        } else {
            this.#initNumbers(input)
        }
    }

    setOperator(input: String) {
        this.operators.push(input)
    }

    addFloat() {
        if (this.numbers[this.counter] != undefined) {
            this.#concatToNumbers(".")
        } else {
            this.#initNumbers("0.")
        }
    }

    setLast(value: String) {
        this.lastEntered = value
        console.log(this.lastEntered)
    }

    checkInit() {
        if (this.lastEntered != undefined) {
            return true
        } else {
            return false
        }
    }

    checkNotOp() {
        if (this.lastEntered != " ") {
            return true
        } else { return false }
    }

    delNumbers() {
        this.numbers[this.counter] = this.numbers[this.counter].slice(0, -1);
    }

    checkForNumber() {
        if (this.counter > 0) {
            return true
        } else {
            return false
        }
    }

    incCounter() {
        this.#counter++
    }

    decCounter() {
        this.#counter--
    }

    backToPrevNumber() {
        this.numbers.pop()
    }

    backToPrevOp() {
        this.operators.pop()
    }

    setPriority() {
        if (this.numbers.length >= this.operators.length) {
            if (this.operators.includes("*")) {
                this.opCounter = this.operators.indexOf("*");
            } else if (this.operators.includes("/")) {
                this.opCounter = this.operators.indexOf("/");
            } else {
                this.opCounter = 0;
            }
        }
    }

    sumOperation() {
        const result: Number = this.add(this.numbers[this.opCounter], this.numbers[this.opCounter + 1]);
        this.numbers.splice(this.opCounter, 2, result);
        this.operators.splice(this.opCounter, 1);
    }

    subOperation() {
        const result: Number = this.subtract(
            this.numbers[this.opCounter],
            this.numbers[this.opCounter + 1]
        )
        this.operators.splice(this.opCounter, 1);
        this.numbers.splice(this.opCounter, 2, result);
    }

    divOperation() {
        if (this.numbers[1] != 0) {
            const result: Number = this.divide(
                this.numbers[this.opCounter],
                this.numbers[this.opCounter + 1]
            );
            this.numbers.splice(this.opCounter, 2, result);
            this.operators.splice(this.opCounter, 1);
        } else {
            throw new Error("ERR - Forbidden Operation: Cannot divide by 0")
        }
    }

    multOperation() {
        const result: Number = this.multiply(
            this.numbers[this.opCounter],
            this.numbers[this.opCounter + 1]
        );
        this.numbers.splice(this.opCounter, 2, result);
        this.operators.splice(this.opCounter, 1);
    }

    toActualNumbers() {
        this.#numbers = this.#numbers.map(el => {
            return (Math.round(parseFloat(el: Number) * 100000) / 100000);
        });
    }

    compute() {
        this.toActualNumbers()
        while (this.operators.length > 0) {
            this.setPriority()
            if (this.operators[this.#opCounter] == "+") {
                this.sumOperation()
            } else if (this.operators[this.#opCounter] == "-") {
                this.subOperation()
            } else if (this.operators[this.#opCounter] == "/") {
                this.divOperation()
            } else if (this.operators[this.#opCounter] == "*") {
                this.multOperation()
            }
        }
    }
}



export default class Engine