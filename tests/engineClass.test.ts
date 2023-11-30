import { Minus, Plus, Divider, Multiplier } from '../src/classes/Operators';
import controller from '../src/MVC/Controller';

describe("Model", () => {
    test("setOperator is called with args", () => {
        const setOperatorSpy = jest.spyOn(controller, "setOperator");
        const minus = new Minus
        controller.setOperator(minus)
        expect(setOperatorSpy).toHaveBeenCalledWith(minus);
    });



});


