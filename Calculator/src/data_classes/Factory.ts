import Controller from "../calc_ctrl/CalcController"
import View from "../View"
import Model from "../calc_model/CalcModel"

abstract class Factory<ClassName> {
    instance: ClassName | null
    class: { new (): ClassName }
    constructor(classname: { new (): ClassName }) {
        this.class = classname
        this.instance = null
    }

    getInstance() {
        if (this.instance == null) {
            this.instance = new this.class()
            // Hide the constructor so the returned object can't be new'd...
        }

        return this.instance
    }
}

class ControllerFactory extends Factory<Controller> {
    constructor() {
        super(Controller)
    }
}
class ModelFactory extends Factory<Model> {
    constructor() {
        super(Model)
    }
}
class ViewFactory extends Factory<View> {
    constructor() {
        super(View)
    }
}

export const cFactory = new ControllerFactory()
export const mFactory = new ModelFactory()
export const vFactory = new ViewFactory()
