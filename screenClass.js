class ScreenDisplay {
    #inner

    constructor() {
        this.id = "screen"
        this.el = document.getElementById(this.id)
        this.#inner = this.el.innerHTML
    }

    set inner(value) {
        this.#inner = value
    }

    concatToDisplay(input) {
        this.inner(this.#inner + input)
    }

    clear() {
        this.inner("")
    }

    display(value) {
        this.inner(value)
    }

    getLast() {
        return this.#inner.charAt(this.#inner.length - 1)
    }
}

export default ScreenDisplay 