import ScreenDisplay from "./screenClass"
import Buttons from "./buttonsClass"
class Calculator {
    #numbers
    #operators
    #counter
    #opCounter
    #lastEntered

    constructor() {
        this.#numbers = [];
        this.#operators = [];
        this.#counter = 0;
        this.#opCounter = 0;
        this.#lastEntered = undefined;
    }

    initSubClasses() {
        this.screen = new ScreenDisplay;
        this.buttons = new Buttons;
    }

    add(a, b) {
        let result = a + b;
        if (result != 0) {
            return result;
        } else {
            return 0;
        }
    };

    subtract(a, b) {
        let result = a - b;
        if (result != 0) {
            return result;
        } else {
            return 0;
        }
    };

    multiply(a, b) {
        let result = a * b;
        if (result != 0) {
            return result;
        } else {
            return 0;
        }
    };

    divide(a, b) {
        let result = a / b;
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


    set lastEntered(value) {
        this.#lastEntered = value
    }
    set opCounter(value) {
        this.#opCounter = value
    }
    set counter(value) {
        this.#counter = value
    }
    set operators(value) {
        this.#operators = value
    }
    set numbers(value) {
        this.#numbers = value
    }

    clearInputs() {
        // reset display
        this.screen.clear()
        // reset number counter so that input goes to first "number"
        this.counter(0)
        // remove all existing elements from number array, leaving it "undefined" so that we start from fresh
        this.numbers.splice(0, this.numbers.length);
        // remove all elements from operator array
        this.operators([]);
        this.lastEntered(undefined);
    }

    displayResult() {
        this.operators([])
        this.counter(0)
        this.screen.display(Math.round(this.numbers[0] * 100000) / 100000)
        this.lastEntered(undefined)
    }

    #concatToNumbers(input) {
        this.#numbers[this.counter] += input
    }

    #initNumbers(input) {
        this.#numbers[this.counter] = input
    }

    setNumber(input) {
        if (this.numbers[this.counter] != undefined) {
            this.#concatToNumbers(input)
        } else {
            this.#initNumbers(input)
        }
    }
    setOperator(input) {
        this.operators.push(input)
    }

    incOpCounter() {
        this.opCounter++
    }
    addFloat() {
        if (this.numbers[this.counter] != undefined) {
            this.#concatToNumbers(".")
        } else {
            this.#initNumbers("0.")
        }
    }
    actualize() {
        this.lastEntered(this.screen.length);
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
    delLast() {
        this.lastEntered(this.screen.delLast())
    }
    delNumbers() {
        this.numbers[this.counter] = this.numbers[this.counter].slice(0, -1);
    }
    delScreen(value) {
        this.screen.display(this.screen.slice(0, value))
    }
    checkForNumber() {
        if (this.counter > 0) {
            return true
        } else {
            return false
        }
    }
    decCounter() {
        this.counter--
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
        // result equals first two number
        let result = this.add(this.numbers[this.opCounter], this.numbers[this.opCounter + 1]);
        //numbers are removed and first number of the pair is now result
        this.numbers.splice(this.opCounter, 2, result);
        this.operators.splice(this.opCounter, 1);
    }
    subOperation() {
        let result = this.subtract(
            this.numbers[this.opCounter],
            this.numbers[this.opCounter + 1]
        )
        this.operators.splice(this.opCounter, 1);
        this.numbers.splice(this.opCounter, 2, result);
    }

    divOperation() {
        // check if user is trying to divide by zero
        if (this.numbers[1] != 0) {
            // if not, perform division
            let result = this.divide(
                this.numbers[this.opCounter],
                this.numbers[this.opCounter + 1]
            );
            this.numbers.splice(this.opCounter, 2, result);
            this.operators.splice(this.opCounter, 1);
        } else {
            // berate user for trying to divide by zero
            this.screen =
                "Err - division by 0";
            setTimeout(function () {
                this.reset();
            }, 1500);
        }
    }

    multOperation() {
        let result = this.multiply(
            this.numbers[this.opCounter],
            this.numbers[this.opCounter + 1]
        );
        this.numbers.splice(this.opCounter, 2, result);
        this.operators.splice(this.opCounter, 1);
    }

    toActualNumbers() {
        this.numbers = this.numbers.map(function (str) {
            return Math.round(parseFloat(str) * 100000) / 100000;
        });
    }

    compute() {
        while (this.operators.length > 0) {
            this.setPriority()

            // if +, perform addition
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



export default Calculator