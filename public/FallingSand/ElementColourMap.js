import { Sand } from "./Sand.js";
import { Water } from "./Water.js";
import { Stone } from "./Stone.js";
import { Empty } from "./Empty.js";
import { Oil } from "./Oil.js";

var colorToElementMap = {
    0x000000: new Empty(),
    0x8CE6F0: new Sand(),
    0xFF901E: new Water(),
    0xA9A9A9: new Stone(),
    0x0B86B8: new Oil()
}

function getElement(color) {
    return colorToElementMap[color]
}

export{getElement};