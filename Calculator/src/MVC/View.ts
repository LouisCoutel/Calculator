import Buttons from "../classes/Buttons"
type Operator = {
    sign: string,
    operate: Function
}
// W.I.P

class View {
    id: string
    screen: HTMLElement
    buttons: any
    model: any

    constructor() {
        this.id = "screen"
        this.screen = document.getElementById(this.id) as HTMLElement

    }

    setButtons() {
        this.buttons = new Buttons
    }

    render() {
        const combinedArrs: Array<any> = []
        this.model.actualNumbers.forEach((number: number, index: number) => {
            combinedArrs.push(number)
            const operator: Operator | undefined = this.model.operatorArray[index]

            if (operator != undefined) {
                combinedArrs.push(operator.sign)
            }
        })
        this.screen.innerText = combinedArrs.map(entry => entry.toString()).join(" ")
    }
}

const view = new View
export default view