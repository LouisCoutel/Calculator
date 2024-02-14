/* eslint-disable @typescript-eslint/no-namespace */
import "@testing-library/jest-dom"
import { TextEncoder, TextDecoder } from "util"
Object.assign(global, { TextDecoder, TextEncoder })
import { JSDOM } from "jsdom"

declare global {
    namespace NodeJS {
        interface Global {
            document: Document
            window: Window
            navigator: Navigator
        }
    }
}

const dom = new JSDOM(`<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600&display=swap&subset=all" rel="stylesheet">
</head>

<body>
    

    <script src="https://kit.fontawesome.com/7a1b45f3d5.js" crossorigin="anonymous"></script>
    <script src="./src/app.ts" type="module"></script>
</body>

</html>`)

global.document = dom.window.document
global.window = global.document.defaultView as Window & typeof globalThis
