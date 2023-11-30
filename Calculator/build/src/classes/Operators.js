"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divider = exports.Multiplier = exports.Minus = exports.Plus = void 0;
class Plus {
    constructor() {
        this.sign = "+";
    }
    operate(a, b) {
        const result = a + b;
        return result;
    }
}
exports.Plus = Plus;
class Minus {
    constructor() {
        this.sign = "-";
    }
    operate(a, b) {
        const result = a - b;
        return result;
    }
}
exports.Minus = Minus;
class Multiplier {
    constructor() {
        this.sign = "*";
    }
    operate(a, b) {
        const result = a * b;
        return result;
    }
}
exports.Multiplier = Multiplier;
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
exports.Divider = Divider;
