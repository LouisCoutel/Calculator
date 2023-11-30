"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Model {
    constructor() {
        this.terms = [];
        this.operators = [];
        this.result = 0;
    }
    setFloat() {
        this.terms[this.terms.length - 1].setFloat();
    }
}
const model = new Model;
model.constructor = () => { return model; };
exports.default = model;
