import Controller from "../MVC/Controller"
import View from "../MVC/View"
import Model from "../MVC/Model"

class Placeholder {
}

class Factory {
    class: typeof Placeholder
    instance: any
    constructor() {
        this.class = Placeholder
        this.instance = null
    }
    getInstance() {
        if (this.instance == null) {
            this.instance = new this.class
            // Hide the constructor so the returned object can't be new'd...
            this.instance.constructor = () => { return this.instance };
        }
        return this.instance;
    }
}

class ControllerFactory extends Factory {
    class: typeof Controller
    constructor() {
        super()
        this.class = Controller
    }
};
class ModelFactory extends Factory {
    class: typeof Model
    constructor() {
        super()
        this.class = Model
    }
};
class ViewFactory extends Factory {
    class: typeof View
    constructor() {
        super()
        this.class = View
    }
};

export const cFactory = new ControllerFactory
export const mFactory = new ModelFactory
export const vFactory = new ViewFactory
