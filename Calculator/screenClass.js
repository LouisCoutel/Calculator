class ScreenDisplay {
    constructor() {
        this.id = "screen"
        this.el = document.getElementById(this.id)
    }

    concatToDisplay(value: String) {
        this.el.innerHTML = this.el.innerHTML + value
    }

    concatFloat() {
        if (this.el.innerHTML.length <= 0) {
            this.displayValue("0.")
        } else {
            this.concatToDisplay(".")
        }
    }

    clear() {
        this.el.innerHTML = ""
    }

    displayValue(value: String) {
        this.el.innerHTML = value
    }

    getLastDisplayed() {
        return this.el.innerHTML.charAt(this.el.innerHTML.length - 1)
    }

    erase(value) {
        this.displayValue(this.el.innerHTML.slice(0, value))
    }
}

export default class ScreenDisplay