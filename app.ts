import { cFactory } from "./src/data_classes/Factory"

const controller = cFactory.getInstance()

window.onload = () => {
    controller.loadView()
}
