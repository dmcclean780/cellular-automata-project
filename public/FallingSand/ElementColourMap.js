import { Sand } from "./Elements/Solids/MovableSolids/Sand.js";
import { Water } from "./Elements/Liquids/Water.js";
import { Stone } from "./Elements/Solids/ImmovableSolids/Stone.js";
import { Empty } from "./Elements/Empty.js";
import { Oil } from "./Elements/Liquids/Oil.js";
import { Acid } from "./Elements/Liquids/Acid.js";
import { Poison } from "./Elements/Liquids/Poison.js";
import { StrongAcid } from "./Elements/Liquids/StrongAcid.js";
import { Earth } from "./Elements/Solids/ImmovableSolids/Earth.js";
import { Bedrock } from "./Elements/Solids/ImmovableSolids/Bedrock.js";

var colorToElementMap = {
    0x000000: new Empty(),
    0x8CE6F0: new Sand(),
    0xFF901E: new Water(),
    0xA9A9A9: new Stone(),
    0x0B86B8: new Oil(),
    0x00FF00: new StrongAcid(),
    0x8515C7: new Poison(),
    0x2FFFAD: new Acid(),
    0x13458B: new Earth(),
    0x424244: new Bedrock(),
}

function getElement(color) {
    return colorToElementMap[color]
}

export{getElement};