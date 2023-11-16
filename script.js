import Calculator from "./calculatorClass.js";
import SingletonFactory from "./factory.js";

function log(value) {
    return console.log(value)
}

const buttonList = {
    digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "/", "*"],
    operators: ["+", "-", "/", "*"],
    backspace: "backspace",
    float: "float",
    equal: "=",
    clear: "CLR"
}

const factory = new SingletonFactory
const buttons = factory.getButtons(buttonList)
const engine = factory.getEngine()
const calcDisplay = factory.getCalcDisplay()
const calculator = new Calculator(engine, calcDisplay, buttons)

log(calculator)
log(buttons)


for (let key in buttons) {
    if (Array.isArray(buttons[key])) {
        buttons[key].forEach(button => {
            button.element.onclick = () => {
                calculator.processInput(button.type, button.value)
            }
        })
    } else {
        if (key != "constructor") {
            let button = buttons[key]
            log(button)
            button.element.onclick = () => {
                calculator.processInput(button.type, button.value)
            }
        }
    }
}


log(buttons)