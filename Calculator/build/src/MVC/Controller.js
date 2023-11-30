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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Controller_model, _Controller_view;
Object.defineProperty(exports, "__esModule", { value: true });
const Model_1 = __importDefault(require("./Model"));
const View_1 = __importDefault(require("./View"));
const Term_1 = __importDefault(require("../classes/Term"));
const Operators_1 = require("../classes/Operators");
class Controller {
    constructor() {
        _Controller_model.set(this, void 0);
        _Controller_view.set(this, void 0);
        __classPrivateFieldSet(this, _Controller_model, Model_1.default, "f");
        __classPrivateFieldSet(this, _Controller_view, View_1.default, "f");
    }
    setOperator(input) {
        __classPrivateFieldGet(this, _Controller_model, "f").operators.push(input);
        __classPrivateFieldGet(this, _Controller_view, "f").render();
    }
    setNumber(input) {
        if (__classPrivateFieldGet(this, _Controller_model, "f").operators.length >= __classPrivateFieldGet(this, _Controller_model, "f").terms.length) {
            __classPrivateFieldGet(this, _Controller_model, "f").terms[__classPrivateFieldGet(this, _Controller_model, "f").terms.length - 1].pushNum(input);
        }
        else {
            __classPrivateFieldGet(this, _Controller_model, "f").terms.push(new Term_1.default(input));
        }
    }
    reset() {
        __classPrivateFieldGet(this, _Controller_model, "f").clearData();
        __classPrivateFieldGet(this, _Controller_view, "f").render();
    }
    errorReset() {
        setTimeout(() => {
            this.reset();
            __classPrivateFieldGet(this, _Controller_view, "f").render();
        }, 1500);
    }
    calcResult() {
        const opClone = __classPrivateFieldGet(this, _Controller_model, "f").operators.map((op) => op);
        const termClone = __classPrivateFieldGet(this, _Controller_model, "f").terms.map((term) => term);
        while (opClone.length > 0) {
            this.compute(opClone, termClone);
        }
        __classPrivateFieldGet(this, _Controller_model, "f").result = this.round(termClone[0].value);
    }
    compute(opClone, termClone) {
        let index = opClone.findIndex(op => op instanceof Operators_1.Multiplier);
        if (!index) {
            index = opClone.findIndex(op => op instanceof Operators_1.Divider);
        }
        if (!index) {
            index = 0;
        }
        const result = opClone[index].operate(termClone[index].value, termClone[index + 1].value);
        termClone.splice(index, 2, new Term_1.default(result));
        opClone.splice(index, 1);
    }
    erase() {
        __classPrivateFieldGet(this, _Controller_model, "f").data.pop();
    }
    round(num) {
        return (num * 100000) / 100000;
    }
}
_Controller_model = new WeakMap(), _Controller_view = new WeakMap();
const controller = new Controller();
controller.constructor = () => { return controller; };
exports.default = controller;
