"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = __importDefault(require("../MVC/Controller"));
const Operators_1 = require("./Operators");
function $(id) {
    return document.getElementById(id);
}
const buttonList = {
    digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    operators: ["+", "-", "/", "*"],
    backspace: "backspace",
    float: "float",
    equal: "=",
    clear: "CLR"
};
class Buttons {
    constructor() {
        this.digitsButtons = buttonList.digits.map((el) => new DigitButton(el));
        this.opsButtons = buttonList.operators.map((el) => {
            if (el == "+") {
                return new PlusButton;
            }
            if (el == "-") {
                return new MinusButton;
            }
            if (el == "*") {
                return new MultiplierButton;
            }
            if (el == "/") {
                return new DividerButton;
            }
        });
        this.backspaceButton = new BackspaceButton;
        this.equalButton = new EqualButton;
        this.floatButton = new FloatButton;
        this.clearButton = new ClearButton;
    }
}
class Button {
    constructor() {
        this.controller = Controller_1.default;
    }
}
class DigitButton extends Button {
    constructor(input) {
        super();
        this.value = parseFloat(input);
        this.id = input;
        this.element = $(input);
        this.element.onclick = () => {
            this.controller.setNumber(this.value);
        };
    }
}
class PlusButton extends Button {
    constructor() {
        super();
        this.id = "+";
        this.element = this.element = $("+");
        this.element.onclick = () => {
            this.controller.setOperator(new Operators_1.Plus);
        };
    }
}
class MinusButton extends Button {
    constructor() {
        super();
        this.id = "-";
        this.element = this.element = $("-");
        this.element.onclick = () => {
            this.controller.setOperator(new Operators_1.Minus);
        };
    }
}
class DividerButton extends Button {
    constructor() {
        super();
        this.id = "/";
        this.element = this.element = $("/");
        this.element.onclick = () => {
            this.controller.setOperator(new Operators_1.Divider);
        };
    }
}
class MultiplierButton extends Button {
    constructor() {
        super();
        this.id = "*";
        this.element = this.element = $("*");
        this.element.onclick = () => {
            this.controller.setOperator(new Operators_1.Multiplier);
        };
    }
}
class FloatButton extends Button {
    constructor() {
        super();
        this.element = $("float");
        this.element.onclick = () => {
            this.controller.addFloat();
        };
    }
}
class BackspaceButton extends Button {
    constructor() {
        super();
        this.element = $("backspace");
        this.element.onclick = () => {
            this.controller.clear();
        };
    }
}
;
class EqualButton extends Button {
    constructor() {
        super();
        this.element = $("=");
        this.element.onclick = () => {
            this.controller.compute(this.element);
        };
    }
}
class ClearButton extends Button {
    constructor() {
        super();
        this.element = $("CLR");
        this.element.onclick = () => {
            this.controller.erase();
        };
    }
}
exports.default = Buttons;
