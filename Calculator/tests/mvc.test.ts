import { cFactory, mFactory, vFactory } from '../src/classes/Factory';
import { Plus, Minus, Multiplier, Divider } from '../src/classes/Operators';
import Term from '../src/classes/Term';
import { html } from '../src/utils/document';
import userEvent from '@testing-library/user-event'
import { Buttons } from "../src/components/Buttons"

document.body.innerHTML = html

const controller = cFactory.getInstance()
const model = mFactory.getInstance()
const view = vFactory.getInstance()

const user = userEvent.setup()

view.setButtons()
view.setDisplay()

const digitButtons = view.buttons.digitsButtons
const opsButtons = view.buttons.opsButtons
const inputField = view.display.inputDisplay
const resultField = view.display.resultDisplay

describe("Controller / Model relation", () => {
    test("setOperator doesn't set operators at init state", () => {
        controller.setOperator(new Minus)
        expect(model.operators.data[0]).toBeUndefined()
    })

    test("setNumber sets new Term in model.terms.data with value as number", () => {
        const setNumberSpy = jest.spyOn(controller, "setNumber");

        controller.setNumber(3)

        expect(setNumberSpy).toHaveBeenCalledWith(3);
        expect(model.terms.data[0]).toBeInstanceOf(Term)
        expect(model.terms.data[0]["value"]).toBe(3)
    });

    test("setOperator sets new Operator if last input was a number", () => {
        controller.setOperator(new Minus)
        expect(model.operators.data[0]).toBeInstanceOf(Minus)
    });

    test("model keeps data in memory and controller.reset sets all back to init state", () => {
        expect(model.operators.data[0]).toBeInstanceOf(Minus)
        expect(model.terms.data[0]).toBeInstanceOf(Term)
        console.log(model.operators.data)
        const resetSpy = jest.spyOn(controller, "reset")
        const clearDataSpy = jest.spyOn(model, "clearData")
        controller.reset()
        expect(resetSpy).toHaveBeenCalledTimes(1)
        expect(clearDataSpy).toHaveBeenCalledTimes(1)

        expect(model.operators.data).toStrictEqual([])
        expect(model.terms.data).toStrictEqual([])
    })

    test("setNumber pushes number to term if term is instanciated and no operator as been set afterward", () => {
        controller.setNumber(3)
        controller.setNumber(5)

        expect(model.terms.data[0].valArr[0]).toBe(3)
        expect(model.terms.data[0].valArr[1]).toBe(5)
        expect(model.terms.data[0].value).toBe(35)

        controller.reset()
    });

    test("controller replaces last op by new op if user inputs more than one op at a time", () => {
        controller.setNumber(3)
        controller.setOperator(new Minus)
        controller.setOperator(new Plus)

        expect(model.operators.data).toHaveLength(1)
        expect(model.operators.data[0].sign).toBe("+")

        controller.reset()
    })

    // test("controller.erase removes last input from model data (single-digit term, last term digit or operator)", () => {
    //     // controller.setNumber(3)
    //     // controller.erase()
    //     // controller.setNumber(4)

    //     // expect(model.terms.data[0]).toBe(4)

    //     // controller.setOperator(new Minus);
    //     // controller.erase()
    //     // controller.setOperator(new Plus);

    //     // expect(model.operators.data[0]).toBeInstanceOf(Plus);

    //     // controller.setNumber(3)
    //     // controller.setNumber(2)
    //     // controller.erase()

    //     // expect(model.terms.data[1]).toBe(3)

    //     // controller.reset()
    // })
})

describe("Model", () => {
    test("model computes display data when data is set in model", () => {
        controller.setNumber(3)
        controller.setOperator(new Minus)
        controller.setNumber(5)

        expect(model.displayData).toStrictEqual([3, "-", 5])

        controller.reset()
    })

    test("model handles basic operations", () => {
        controller.setNumber(3)
        controller.setOperator(new Plus)
        controller.setNumber(6)
        controller.launchCompute()

        expect(model.result).toBe(9)

        controller.reset()
    })
    test("model handle chained operations with priority", () => {
        controller.setNumber(3)
        controller.setOperator(new Plus)
        controller.setNumber(6)
        controller.setOperator(new Multiplier)
        controller.setNumber(2)
        controller.launchCompute()

        expect(model.result).toBe(15)

        controller.reset()
    })
    test("model handles operations with complex terms and floats", () => {
        controller.setNumber(1)
        controller.setFloat()
        controller.setNumber(5)
        controller.setOperator(new Plus)
        controller.setNumber(1)
        controller.setNumber(1)
        controller.setOperator(new Multiplier)
        controller.setNumber(2)
        controller.launchCompute()

        expect(model.result).toBe(23.5)

        controller.reset()
    })
    test("model rounds up result to 7th digit", () => {
        controller.setNumber(1)
        controller.setOperator(new Divider)
        controller.setNumber(3)
        controller.launchCompute()

        expect(model.result).toBe(0.3333333)

        controller.reset()
    })
    test("model throw error when trying to divide by 0", () => {
        controller.setNumber(1)
        controller.setOperator(new Divider)
        controller.setNumber(0)

        const errorResetSpy = jest.spyOn(controller, 'errorReset')
        const resetSpy = jest.spyOn(controller, 'reset')
        controller.launchCompute()
        expect(() => { model.calcResult() }).toThrow("Cannot divide by (0)")
        expect(errorResetSpy).toHaveBeenCalled()
        expect(resetSpy).toHaveBeenCalled()
    })
});

describe("View / Controller relation", () => {
    test("view has buttons", () => {
        expect(view.buttons).toBeInstanceOf(Buttons)
    })

    test("buttons include elements with event handlers and clicks triggers events", async () => {
        const setOperatorSpy = jest.spyOn(controller, "setOperator");
        const setNumberSpy = jest.spyOn(controller, "setNumber");

        expect(digitButtons[0]).toHaveProperty("element")
        expect(opsButtons[0]).toHaveProperty("element")

        expect(typeof digitButtons[0].element.onclick).toBe("function")
        expect(typeof opsButtons[0].element.onclick).toBe("function")

        await user.click(digitButtons[0].element)
        await user.click(opsButtons[0].element)

        expect(setNumberSpy).toHaveBeenCalled()
        expect(setOperatorSpy).toHaveBeenCalled()

        controller.reset()
    })
    test("view displays inputs and result in display", async () => {
        await user.click(digitButtons[1].element)
        await user.click(opsButtons[0].element)
        await user.click(digitButtons[1].element)

        expect(inputField.innerText).toBe("1 + 1")

        await user.click(view.buttons.equalButton.element)

        expect(resultField.innerText).toBe("2")

        controller.reset()
    })
})

