"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const buttonsClass_js_1 = __importDefault(require("./buttonsClass.js"));
const engineClass_js_1 = __importDefault(require("./engineClass.js"));
const screenClass_js_1 = __importDefault(require("./screenClass.js"));
class SingletonFactory {
    constructor() {
        this.model = null;
        this.view = null;
        this.buttons = null;
    }
    getEngine() {
        if (this.model == null) {
            this.model = new engineClass_js_1.default;
            // Hide the constructor so the returned object can't be new'd...
            this.model.constructor = () => { return this.model; };
        }
        return this.model;
    }
    getCalcDisplay() {
        if (this.view == null) {
            this.view = new screenClass_js_1.default;
            // Hide the constructor so the returned object can't be new'd...
            this.view.constructor = () => { return this.view; };
        }
        return this.view;
    }
    getButtons(buttonList) {
        if (this.buttons == null) {
            this.buttons = new buttonsClass_js_1.default(buttonList);
            // Hide the constructor so the returned object can't be new'd...
            this.buttons.constructor = () => { return this.buttons; };
        }
        return this.buttons;
    }
}
;
exports.default = SingletonFactory;
