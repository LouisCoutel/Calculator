import { cFactory, vFactory } from "../src/data_classes/Factory"
import { html } from "../src/utils/docTemplate"
import userEvent from "@testing-library/user-event"
import { Buttons } from "../src/components/Buttons"

document.body.innerHTML = html

const controller = cFactory.getInstance()
const view = vFactory.getInstance()

const user = userEvent.setup()

view.setButtons()
view.setDisplay()

const digitButtons = view.buttons.digitsButtons
const opsButtons = view.buttons.opsButtons
const inputField = view.display.inputDisplay
const resultField = view.display.resultDisplay

describe("View / Controller relation", () => {
    test("view has buttons", () => {
        expect(view.buttons).toBeInstanceOf(Buttons)
    })

    test("buttons include elements with event handlers and clicks triggers events", async () => {
        const setOperatorSpy = jest.spyOn(controller, "setOperator")
        const setNumberSpy = jest.spyOn(controller, "setNumber")

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
