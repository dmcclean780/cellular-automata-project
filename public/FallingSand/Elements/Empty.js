import { Element } from "./Elements.js";
import {getElement } from "../ElementColourMap.js";

class Empty extends Element{
    density=0;
    dispersionRate=0
    acidResistance=1;
}

export{Empty}