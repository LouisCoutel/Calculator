
import  Buttons from "./buttonsClass.js"
import ScreenDisplay from "./screenClass.js";
import Calculator from "./calcClass.js";

function log(value) {
    return console.log(value)
}


const calculator = new Calculator();
const buttonList = {
    digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    operators: ["+", "-", "/", "*"],
    backspace: "backspace",
    float: "float",
    equal: "=",
    clear: "CLR"
}
const buttons = new Buttons(buttonList, calculator)

log(calculator)

calculator.initSubClasses()

log(calculator)