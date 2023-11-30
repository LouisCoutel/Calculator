"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculatorClass_js_1 = __importDefault(require("./calculatorClass.js"));
const factory_js_1 = __importDefault(require("./factory.js"));
function log(value) {
    return console.log(value);
}
const buttonList = {
    digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "/", "*"],
    operators: ["+", "-", "/", "*"],
    backspace: "backspace",
    float: "float",
    equal: "=",
    clear: "CLR"
};
const factory = new factory_js_1.default;
const buttons = factory.getButtons(buttonList);
const model = factory.getEngine();
const view = factory.getCalcDisplay();
const calculator = new calculatorClass_js_1.default(model, view, buttons);
log(calculator);
log(buttons);
for (let key in buttons) {
    if (Array.isArray(buttons[key])) {
        buttons[key].forEach((button) => {
            button.element.onclick = () => {
                calculator.processInput(button.type, button.value);
            };
        });
    }
    else {
        if (key != "constructor") {
            let button = buttons[key];
            log(button);
            button.element.onclick = () => {
                calculator.processInput(button.type, button.value);
            };
        }
    }
}
log(buttons);
