import Term from "../src/data_classes/Term"
import { cFactory, mFactory, vFactory } from "../src/data_classes/Factory"
import { Plus, Minus } from "../src/data_classes/Operators"
import { html } from "../src/utils/docTemplate"

const controller = cFactory.getInstance()
const model = mFactory.getInstance()
const view = vFactory.getInstance()

document.body.innerHTML = html

view.setButtons()
view.setDisplay()

describe("Controller / Model relation", () => {
    test("setOperator doesn't set operators at init state", () => {
        controller.setOperator(new Minus())

        expect(model.operators.data[0]).toBeUndefined()
    })

    test("setNumber sets new Term in model.terms.data with value as number", () => {
        const setNumberSpy = jest.spyOn(controller, "setNumber")

        controller.setNumber(3)

        expect(setNumberSpy).toHaveBeenCalledWith(3)
        expect(model.terms.data[0]).toBeInstanceOf(Term)
        expect(model.terms.data[0]["value"]).toBe(3)
    })

    test("setOperator sets new Operator if last input was a number", () => {
        controller.setOperator(new Minus())

        expect(model.operators.data[0]).toBeInstanceOf(Minus)
    })

    test("model keeps data in memory and controller.reset sets all back to init state", () => {
        expect(model.operators.data[0]).toBeInstanceOf(Minus)
        expect(model.terms.data[0]).toBeInstanceOf(Term)

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
    })

    test("controller replaces last op by new op if user inputs more than one op at a time", () => {
        controller.setNumber(3)
        controller.setOperator(new Minus())
        controller.setOperator(new Plus())

        expect(model.operators.data).toHaveLength(1)
        expect(model.operators.data[0].sign).toBe("+")

        controller.reset()
    })

    test("controller handles setting floats, even as first input", () => {
        controller.setNumber(3)
        controller.setFloat()
        controller.setNumber(3)

        expect(model.terms.data[0].value).toBe(3.3)

        controller.reset()
        controller.setFloat()
        controller.setNumber(3)

        expect(model.terms.data[0].value).toBe(0.3)

        controller.reset()
    })
})
