import { cFactory, mFactory, vFactory } from "../src/data_classes/Factory"
import { Plus, Minus, Multiplier, Divider } from "../src/data_classes/Operators"
import { html } from "../src/utils/docTemplate"

const controller = cFactory.getInstance()
const model = mFactory.getInstance()
const view = vFactory.getInstance()

document.body.innerHTML = html

view.setButtons()
view.setDisplay()

describe("Model", () => {
    test("model computes display data when data is set in model", () => {
        controller.setNumber(3)
        controller.setOperator(new Minus())
        controller.setNumber(5)

        expect(model.displayData).toStrictEqual([3, "-", 5])

        controller.reset()
    })

    test("model handles basic operations", () => {
        controller.setNumber(3)
        controller.setOperator(new Plus())
        controller.setNumber(6)

        controller.launchCompute()

        expect(model.result).toBe(9)

        controller.reset()
    })

    test("model handle chained operations with priority", () => {
        controller.setNumber(3)
        controller.setOperator(new Plus())
        controller.setNumber(6)
        controller.setOperator(new Multiplier())
        controller.setNumber(2)

        controller.launchCompute()

        expect(model.result).toBe(15)

        controller.reset()
    })
    test("model handles operations with complex terms and floats", () => {
        controller.setNumber(1)
        controller.setFloat()
        controller.setNumber(5)
        controller.setOperator(new Plus())
        controller.setNumber(1)
        controller.setNumber(1)
        controller.setOperator(new Multiplier())
        controller.setNumber(2)

        controller.launchCompute()

        expect(model.result).toBe(23.5)

        controller.reset()
    })

    test("model rounds up result to 7th digit", () => {
        controller.setNumber(1)
        controller.setOperator(new Divider())
        controller.setNumber(3)

        controller.launchCompute()

        expect(model.result).toBe(0.3333333)

        controller.reset()
    })
    test("model throw error when trying to divide by 0", () => {
        controller.setNumber(1)
        controller.setOperator(new Divider())
        controller.setNumber(0)

        const errorResetSpy = jest.spyOn(controller, "errorReset")

        controller.launchCompute()

        expect(() => {
            model.calcResult()
        }).toThrow("Cannot divide by (0)")

        expect(errorResetSpy).toHaveBeenCalled()
    })
})
