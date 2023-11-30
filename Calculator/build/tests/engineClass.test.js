"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Operators_js_1 = require("../src/classes/Operators.js");
const Controller_js_1 = __importDefault(require("../src/MVC/Controller.js"));
describe("Model", () => {
    test("setOperator is called with args", () => {
        const setOperatorSpy = jest.spyOn(Controller_js_1.default, "setOperator");
        const minus = new Operators_js_1.Minus;
        Controller_js_1.default.setOperator(minus);
        expect(setOperatorSpy).toHaveBeenCalledWith(minus);
    });
});
