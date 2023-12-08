import { cFactory, vFactory, mFactory } from "./classes/Factory";

const controller = cFactory.getInstance()
const view = vFactory.getInstance()
const model = mFactory.getInstance()

window.onload = () => {
    controller.loadView()
}