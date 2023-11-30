"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function $(id) {
    const returned = document.getElementById(id);
    const el = returned;
    return el;
}
class Buttons {
    constructor(buttonList) {
        this.digitsButtons = buttonList.digits.map((el) => new DigitButton(el));
        this.opsButtons = buttonList.operators.map((el) => new OperatorButton(el));
        this.backspaceButton = new BackspaceButton(buttonList.backspace);
        this.equalButton = new EqualButton(buttonList.equal);
        this.floatButton = new FloatButton(buttonList.float);
        this.clearButton = new ClearButton(buttonList.clear);
    }
}
class Button {
    constructor(input) {
        this.element = $(input);
        this.value = input;
    }
}
class DigitButton extends Button {
    constructor(input) {
        super(input);
        this.type = "digit";
    }
}
class OperatorButton extends Button {
    constructor(input) {
        super(input);
        this.type = "operator";
    }
}
class FloatButton extends Button {
    constructor(input) {
        super(input);
        this.type = "float";
    }
}
class BackspaceButton extends Button {
    constructor(input) {
        super(input);
        this.type = "backspace";
    }
}
;
class EqualButton extends Button {
    constructor(input) {
        super(input);
        this.type = "equal";
    }
}
class ClearButton extends Button {
    constructor(input) {
        super(input);
        this.type = "clear";
    }
}
exports.default = Buttons;
