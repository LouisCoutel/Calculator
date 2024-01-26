import Controller from "../calc_ctrl/CalcController"
import Model from "../calc_model/CalcModel"
import View from "../View"
import { DataArray } from "../data_classes/DataArray"
import { Operator } from "../data_classes/Operators"
import Term from "../data_classes/Term"
import { Buttons } from "../components/Buttons"
import Display from "../components/Display"

export class Placeholder {}

export type model = Model
export type controller = Controller
export type view = View
export type buttons = Buttons
export type display = Display
export type dataArray = DataArray
export type operator = Operator
export type term = Term
