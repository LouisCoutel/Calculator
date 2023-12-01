import '@testing-library/jest-dom'
import { Plus, Minus } from './src/classes/Operators';
import controller from './src/MVC/Controller';
import model from './src/MVC/Model';
import view from './src/MVC/View';
import Term from './src/classes/Term';
describe("Model", () => {
    test("setOperator doesn't set operators at init state", () => {
        controller.setOperator(new Minus)
        expect(model.operators[0]).toBeUndefined()
    })
    test("setNumber is called with args and sets new Term in model.terms with value as number", () => {
        const setNumberSpy = jest.spyOn(controller, "setNumber");
        controller.setNumber(3)
        expect(setNumberSpy).toHaveBeenCalledWith(3);
        expect(model.terms[0]).toBeInstanceOf(Term)
        expect(model.terms[0].value).toBe(3)
    });

    test("setOperator is called with args and sets new Operator in model.operators with sign as string if last input was a number", () => {
        controller.setOperator(new Minus)
        expect(model.operators[0]).toBeInstanceOf(Minus)
        expect(model.operators[0].sign).toBe("-")
    });


    test("model and view keep data in memory and controller.reset sets all back to init state", () => {
        expect(model.operators[0]).toBeInstanceOf(Minus)
        expect(model.terms[0]).toBeInstanceOf(Term)
        expect(view.displayData[0]).toBeDefined()

        controller.reset()

        expect(model.operators).toStrictEqual([])
        expect(model.terms).toStrictEqual([])
        expect(view.displayData[0]).toBeUndefined()
    })

    test("setNumber pushes number to term if term is instanciated and no operator as been set afterward", () => {
        controller.setNumber(3)
        controller.setNumber(5)
        expect(model.terms[0]).toBeInstanceOf(Term)
        expect(model.terms[0].valArr[0]).toBe(3)
        expect(model.terms[0].valArr[1]).toBe(5)
        expect(model.terms[0].value).toBe(35)
        controller.reset()
    });
    test("view computes display data when data is set in model", () => {
        const renderSpy = jest.spyOn(view, "render");
        controller.setNumber(3)
        expect(renderSpy).toHaveBeenCalled()
        expect(view.displayData).toStrictEqual(["3"])
    })
    test("controller replaces last op by new op if user inputs more than one op at a time", () => {
        controller.setOperator(new Minus)
        controller.setOperator(new Plus)
        expect(model.operators).toHaveLength(1)
        expect(model.operators[0].sign).toBe("+")
        controller.reset()
    })
});