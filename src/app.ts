import { cFactory, vFactory, mFactory } from "./data_classes/Factory"

const controller = cFactory.getInstance()

window.onload = () => {
    controller.loadView()
}
