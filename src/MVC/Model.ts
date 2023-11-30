import Term from "../classes/Term"
type Operator = {
    sign: string,
    operate: Function
}

class Model {
    terms: Array<Term>
    operators: Array<Operator>

    result: number

    constructor() {
        this.terms = []
        this.operators = []
        this.result = 0
    }

    setFloat() {
        this.terms[this.terms.length - 1].setFloat()
    }
}



const model = new Model
model.constructor = () => { return model };
export default model