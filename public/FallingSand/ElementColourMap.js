import { Sand, Water, Stone, Empty } from "./Elements.js";

var empty = new Empty;
var stone = new Stone;
var sand = new Sand;
var water = new Water;


var ElementColour=[ [0,empty], [0x8CE6F0, sand], [0xFF901E, water], [0xA9A9A9, stone] ]

function getElement(colour){
    for(var i=0; i<ElementColour.length; i++){
        if (ElementColour[i][0]==colour){
            return ElementColour[i][1];
        }
    }
}

export{getElement};