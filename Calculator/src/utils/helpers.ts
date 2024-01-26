export function $(id: string) {
    return document.getElementById(id) as HTMLElement
}

export function log(value: string) {
    return console.log(value)
}
