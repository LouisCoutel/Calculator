"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Calculator_engine, _Calculator_calcDisplay;
Object.defineProperty(exports, "__esModule", { value: true });
class Calculator {
    constructor(model, view, buttons) {
        _Calculator_engine.set(this, void 0);
        _Calculator_calcDisplay.set(this, void 0);
        __classPrivateFieldSet(this, _Calculator_engine, model, "f");
        __classPrivateFieldSet(this, _Calculator_calcDisplay, view, "f");
        this.buttons = buttons;
    }
    errorReset() {
        // berate user for trying to divide by zero
        setTimeout(() => {
            __classPrivateFieldGet(this, _Calculator_engine, "f").reset();
            __classPrivateFieldGet(this, _Calculator_calcDisplay, "f").clear();
        }, 1500);
    }
    clearInputs() {
        // reset display
        __classPrivateFieldGet(this, _Calculator_calcDisplay, "f").clear();
        __classPrivateFieldGet(this, _Calculator_engine, "f").reset();
    }
    processResult() {
        __classPrivateFieldGet(this, _Calculator_engine, "f").compute();
        const result = __classPrivateFieldGet(this, _Calculator_engine, "f").getResult();
        __classPrivateFieldGet(this, _Calculator_calcDisplay, "f").displayValue(result);
        // this.#model.setNumber(result)
        // this.#model.setLast(result[result.length - 1])
    }
    actualize() {
        __classPrivateFieldGet(this, _Calculator_engine, "f").setLast(__classPrivateFieldGet(this, _Calculator_calcDisplay, "f").getLastDisplayed());
    }
    addDigit(digit) {
        __classPrivateFieldGet(this, _Calculator_calcDisplay, "f").concatToDisplay(digit);
        __classPrivateFieldGet(this, _Calculator_engine, "f").setNumber(digit);
        __classPrivateFieldGet(this, _Calculator_engine, "f").setLast(digit);
    }
    addOp(op) {
        __classPrivateFieldGet(this, _Calculator_calcDisplay, "f").concatToDisplay(" " + op + " ");
        __classPrivateFieldGet(this, _Calculator_engine, "f").setOperator(op);
        __classPrivateFieldGet(this, _Calculator_engine, "f").incCounter();
        __classPrivateFieldGet(this, _Calculator_engine, "f").setLast(op);
    }
    addFloat() {
        __classPrivateFieldGet(this, _Calculator_engine, "f").addFloat();
        __classPrivateFieldGet(this, _Calculator_calcDisplay, "f").concatFloat();
        __classPrivateFieldGet(this, _Calculator_engine, "f").setLast("float");
    }
    erase() {
        if (__classPrivateFieldGet(this, _Calculator_engine, "f").checkInit()) {
            // if we're not starting over, remove last character from display string
            // check if the last char is an operator
            if (__classPrivateFieldGet(this, _Calculator_engine, "f").checkNotOp()) {
                // if the last input isn't and is a number or a dot, remove last character from current "number" array element
                __classPrivateFieldGet(this, _Calculator_calcDisplay, "f").erase(-1);
                __classPrivateFieldGet(this, _Calculator_engine, "f").delNumbers();
                this.actualize();
                // if last char is a space
            }
            else {
                // remove last 3 char from display
                __classPrivateFieldGet(this, _Calculator_calcDisplay, "f").erase(-3);
                // and remove from operator array
                __classPrivateFieldGet(this, _Calculator_engine, "f").backToPrevNumber();
                __classPrivateFieldGet(this, _Calculator_engine, "f").backToPrevOp();
                this.actualize();
                // check if there's still a number stored in the array, meaning there is a number before the operator we just removed
                if (__classPrivateFieldGet(this, _Calculator_engine, "f").checkForNumber()) {
                    // actualize number counter to switch to last number still stored
                    __classPrivateFieldGet(this, _Calculator_engine, "f").decCounter();
                    __classPrivateFieldGet(this, _Calculator_engine, "f").backToPrevNumber();
                }
            }
        }
    }
    processInput(type, value) {
        if (type == "digit") {
            this.addDigit(value);
        }
        ;
        if (type == "operator") {
            this.addOp(value);
        }
        if (type == "float") {
            this.addFloat();
        }
        if (type == "backspace") {
            this.erase();
        }
        if (type == "clear") {
            this.clearInputs();
        }
        if (type == "equal") {
            try {
                this.processResult();
            }
            catch (err) {
                console.error(err);
                __classPrivateFieldGet(this, _Calculator_calcDisplay, "f").displayValue("Error: division by 0");
                this.errorReset();
            }
        }
    }
}
_Calculator_engine = new WeakMap(), _Calculator_calcDisplay = new WeakMap();
exports.default = Calculator;
