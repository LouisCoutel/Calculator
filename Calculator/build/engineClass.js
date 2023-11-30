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
var _Engine_numberArrays, _Engine_operatorArray, _Engine_counter, _Engine_opCounter, _Engine_lastEntered, _Engine_float, _Engine_actualNumbers;
Object.defineProperty(exports, "__esModule", { value: true });
class Plus {
    constructor() {
        this.sign = "+";
    }
    operate(a, b) {
        const result = a + b;
        return result;
    }
}
class Minus {
    constructor() {
        this.sign = "-";
    }
    operate(a, b) {
        const result = a - b;
        return result;
    }
}
class Multiplier {
    constructor() {
        this.sign = "*";
    }
    operate(a, b) {
        const result = a * b;
        return result;
    }
}
class Divider {
    constructor() {
        this.sign = "/";
    }
    operate(a, b) {
        if (b) {
            const result = a / b;
            return result;
        }
        else {
            throw new Error('Cannot divide by (0)');
        }
    }
}
class Engine {
    constructor() {
        _Engine_numberArrays.set(this, void 0);
        _Engine_operatorArray.set(this, void 0);
        _Engine_counter.set(this, void 0);
        _Engine_opCounter.set(this, void 0);
        _Engine_lastEntered.set(this, void 0);
        _Engine_float.set(this, void 0);
        _Engine_actualNumbers.set(this, void 0);
        __classPrivateFieldSet(this, _Engine_numberArrays, [], "f");
        __classPrivateFieldSet(this, _Engine_operatorArray, [], "f");
        __classPrivateFieldSet(this, _Engine_counter, 0, "f");
        __classPrivateFieldSet(this, _Engine_opCounter, 0, "f");
        __classPrivateFieldSet(this, _Engine_lastEntered, "", "f");
        __classPrivateFieldSet(this, _Engine_float, false, "f");
        __classPrivateFieldSet(this, _Engine_actualNumbers, [], "f");
    }
    actualizeNumberArrays() {
        __classPrivateFieldSet(this, _Engine_numberArrays, __classPrivateFieldGet(this, _Engine_actualNumbers, "f").map(number => {
            const arrOfStrings = Array.from(number.toString());
            const arr = arrOfStrings.map(str => parseFloat(str));
            return arr;
        }), "f");
    }
    actualizeActualNumbers() {
        __classPrivateFieldSet(this, _Engine_actualNumbers, __classPrivateFieldGet(this, _Engine_numberArrays, "f").map((subArr) => parseFloat(subArr.join(""))), "f");
    }
    get lastEntered() {
        return __classPrivateFieldGet(this, _Engine_lastEntered, "f");
    }
    get opCounter() {
        return __classPrivateFieldGet(this, _Engine_opCounter, "f");
    }
    get counter() {
        return __classPrivateFieldGet(this, _Engine_counter, "f");
    }
    get operatorArray() {
        return __classPrivateFieldGet(this, _Engine_operatorArray, "f");
    }
    get numberArrays() {
        return __classPrivateFieldGet(this, _Engine_numberArrays, "f");
    }
    get actualNumbers() {
        return __classPrivateFieldGet(this, _Engine_actualNumbers, "f");
    }
    set lastEntered(value) {
        __classPrivateFieldSet(this, _Engine_lastEntered, value, "f");
    }
    set opCounter(value) {
        __classPrivateFieldSet(this, _Engine_opCounter, value, "f");
    }
    set counter(value) {
        __classPrivateFieldSet(this, _Engine_counter, value, "f");
    }
    set operatorArray(value) {
        __classPrivateFieldSet(this, _Engine_operatorArray, value, "f");
    }
    set numberArrays(value) {
        __classPrivateFieldSet(this, _Engine_numberArrays, value, "f");
    }
    set actualNumbers(value) {
        __classPrivateFieldSet(this, _Engine_actualNumbers, value, "f");
    }
    reset() {
        // reset number counter so that input goes to first "number"
        this.counter = 0;
        // remove all existing elements from number array, leaving it "undefined" so that we start from fresh
        __classPrivateFieldSet(this, _Engine_numberArrays, [], "f");
        // remove all elements from operator array
        __classPrivateFieldSet(this, _Engine_operatorArray, [], "f");
        this.lastEntered = "";
    }
    addFloat() {
        __classPrivateFieldSet(this, _Engine_float, true, "f");
    }
    clearFloat() {
        __classPrivateFieldSet(this, _Engine_float, false, "f");
    }
    getResult() {
        return (__classPrivateFieldGet(this, _Engine_actualNumbers, "f")[0] * 100000) / 100000;
    }
    pushToNumber(input) {
        if (__classPrivateFieldGet(this, _Engine_float, "f") == true) {
            __classPrivateFieldGet(this, _Engine_numberArrays, "f")[this.counter].push(input / 10);
            this.clearFloat();
        }
        else {
            __classPrivateFieldGet(this, _Engine_numberArrays, "f")[this.counter].push(input);
        }
    }
    initNumbers(input) {
        const arr = [input];
        __classPrivateFieldGet(this, _Engine_numberArrays, "f").push(arr);
    }
    setNumber(input) {
        if (__classPrivateFieldGet(this, _Engine_numberArrays, "f")[this.counter] != undefined) {
            this.pushToNumber(input);
            this.incCounter();
            this.actualizeActualNumbers();
        }
        else {
            this.initNumbers(input);
            this.actualizeActualNumbers();
        }
    }
    setOperator(input) {
        const operator = (() => {
            if (input == "+") {
                return new Plus();
            }
            if (input == "-") {
                return new Minus();
            }
            if (input == "*") {
                return new Multiplier();
            }
            if (input == "/") {
                return new Divider();
            }
        })();
        __classPrivateFieldGet(this, _Engine_operatorArray, "f").push(operator);
    }
    setLast(value) {
        __classPrivateFieldSet(this, _Engine_lastEntered, value, "f");
    }
    checkInit() {
        if (this.lastEntered != undefined) {
            return true;
        }
        else {
            return false;
        }
    }
    checkNotOp() {
        if (this.lastEntered != " ") {
            return true;
        }
        else {
            return false;
        }
    }
    delNumbers() {
        if (__classPrivateFieldGet(this, _Engine_numberArrays, "f")[this.counter].length > 1) {
            __classPrivateFieldGet(this, _Engine_numberArrays, "f")[this.counter].pop();
            this.actualizeActualNumbers();
        }
    }
    checkForNumber() {
        if (this.counter > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    incCounter() {
        var _a;
        __classPrivateFieldSet(this, _Engine_counter, (_a = __classPrivateFieldGet(this, _Engine_counter, "f"), _a++, _a), "f");
    }
    decCounter() {
        var _a;
        __classPrivateFieldSet(this, _Engine_counter, (_a = __classPrivateFieldGet(this, _Engine_counter, "f"), _a--, _a), "f");
    }
    backToPrevNumber() {
        __classPrivateFieldGet(this, _Engine_numberArrays, "f").pop();
    }
    backToPrevOp() {
        __classPrivateFieldGet(this, _Engine_operatorArray, "f").pop();
    }
    setPriority() {
        if (__classPrivateFieldGet(this, _Engine_numberArrays, "f").length >= __classPrivateFieldGet(this, _Engine_operatorArray, "f").length) {
            if (__classPrivateFieldGet(this, _Engine_operatorArray, "f").some(obj => obj.sign == "*")) {
                __classPrivateFieldSet(this, _Engine_opCounter, __classPrivateFieldGet(this, _Engine_operatorArray, "f").findIndex(obj => obj.sign == "*"), "f");
            }
            else if (__classPrivateFieldGet(this, _Engine_operatorArray, "f").some(obj => obj.sign == "/")) {
                __classPrivateFieldSet(this, _Engine_opCounter, __classPrivateFieldGet(this, _Engine_operatorArray, "f").findIndex(obj => obj.sign == "/"), "f");
            }
            else {
                __classPrivateFieldSet(this, _Engine_opCounter, 0, "f");
            }
        }
    }
    compute() {
        this.actualizeActualNumbers();
        while (__classPrivateFieldGet(this, _Engine_operatorArray, "f").length > 0) {
            this.setPriority();
            const opCounter = __classPrivateFieldGet(this, _Engine_opCounter, "f");
            const numA = __classPrivateFieldGet(this, _Engine_actualNumbers, "f")[opCounter];
            const numB = __classPrivateFieldGet(this, _Engine_actualNumbers, "f")[opCounter];
            const result = __classPrivateFieldGet(this, _Engine_operatorArray, "f")[opCounter].operate(numA, numB);
        }
    }
}
_Engine_numberArrays = new WeakMap(), _Engine_operatorArray = new WeakMap(), _Engine_counter = new WeakMap(), _Engine_opCounter = new WeakMap(), _Engine_lastEntered = new WeakMap(), _Engine_float = new WeakMap(), _Engine_actualNumbers = new WeakMap();
exports.default = Engine;
