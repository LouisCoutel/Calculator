import Buttons from "./buttonsClass.js";
import Engine from "./engineClass.js";
import ScreenDisplay from "./screenClass.js";



class SingletonFactory {
    engine
    calcDisplay
    buttons
    getEngine() {
        if (this.engine == null) {
            this.engine = new Engine
            // Hide the constructor so the returned object can't be new'd...
            this.engine.constructor = () => { return this.engine };
        }
        return this.engine;
    }
    getCalcDisplay() {
        if (this.calcDisplay == null) {
            this.calcDisplay = new ScreenDisplay
            // Hide the constructor so the returned object can't be new'd...
            this.calcDisplay.constructor = () => { return this.calcDisplay };
        }
        return this.calcDisplay;
    }
    getButtons(buttonList) {
        if (this.buttons == null) {
            this.buttons = new Buttons(buttonList)
            // Hide the constructor so the returned object can't be new'd...
            this.buttons.constructor = () => { return this.buttons };
        }
        return this.buttons;
    }
};
export default SingletonFactory