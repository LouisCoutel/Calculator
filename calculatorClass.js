

class Calculator {
    #engine
    #calcDisplay
    constructor(engine, calcDisplay, buttons) {
        this.#engine = engine
        this.#calcDisplay = calcDisplay
        this.buttons = buttons
    }

    errorReset() {
        // berate user for trying to divide by zero
        setTimeout(function () {
            this.#engine.reset();
            this.#calcDisplay.clear()
        }, 1500);
    }

    clearInputs() {
        // reset display
        this.#calcDisplay.clear()
        this.#engine.reset()
    }
    processResult() {
        this.#engine.compute()
        let result = this.#engine.getResult()
        this.#calcDisplay.displayValue(result)
    }
    actualize() {
        this.#engine.setLast(this.#calcDisplay.getLastDisplayed())
    }
    addDigit(digit) {
        this.#calcDisplay.concatToDisplay(digit)
        this.#engine.setNumber(digit)
        this.#engine.setLast(digit);
    }
    addOp(op) {
        this.#calcDisplay.concatToDisplay(" " + op + " ")
        this.#engine.setOperator(op)
        this.#engine.incCounter()
        this.#engine.setLast(op);
    }
    addFloat() {
        this.#engine.addFloat();
        this.#calcDisplay.concatFloat()
        this.#engine.setLast("float");
    }
    erase() {
        if (this.#engine.checkInit()) {
            // if we're not starting over, remove last character from display string
            // check if the last char is an operator
            if (this.#engine.checkNotOp()) {
                // if the last input isn't and is a number or a dot, remove last character from current "number" array element
                this.#calcDisplay.erase(-1)
                this.#engine.backToPrevNumber()
                this.actualize()
                // if last char is a space
            } else {
                // remove last 3 char from display
                this.#calcDisplay.erase(-3)
                // and remove from operator array
                this.#engine.backToPrevOp()
                this.actualize()

                // check if there's still a number stored in the array, meaning there is a number before the operator we just removed
                if (this.#engine.checkForNumber()) {
                    // actualize number counter to switch to last number still stored
                    this.#engine.decCounter()
                    this.#engine.backToPrevNumber()
                }

            }
        }
    }
    processInput(type, value) {
        if (type == "digit") {
            this.addDigit(value)
        };
        if (type == "operator") {
            this.addOp(value)
        }
        if (type == "float") {
            this.addFloat()
        }
        if (type == "backspace") {
            this.erase()
        }
        if (type == "clear") {
            this.clearInputs()
        }
        if (type == "equal") {
            try {
                this.processResult()
            } catch (err) {
                console.error(err);
                this.#calcDisplay.displayValue("Error: division by 0")
                this.errorReset()
            }

        }
    }
}

export default Calculator