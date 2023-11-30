"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Buttons_1 = __importDefault(require("../classes/Buttons"));
class View {
    constructor() {
        this.id = "screen";
        this.screen = document.getElementById(this.id);
        this.buttons = new Buttons_1.default();
    }
    render() {
        const combinedArrs = [];
        this.model.actualNumbers.forEach((number, index) => {
            combinedArrs.push(number);
            const operator = this.model.operatorArray[index];
            if (operator != undefined) {
                combinedArrs.push(operator.sign);
            }
        });
        this.screen.innerText = combinedArrs.map(entry => entry.toString()).join(" ");
    }
}
const view = new View;
view.constructor = () => { return view; };
exports.default = view;
