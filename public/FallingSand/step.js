import {getElement } from "./ElementColourMap.js";
import { Water } from "./Water.js";

function step(gameArray, canvasData, newGameArray){
    newGameArray=gameArray.slice()
    var updatedPositions=[];
    var waterCount=0;
    for(var i=0; i<gameArray.length; i++){
        var colour=gameArray[i];
        colour &= 0x00ffffff;
        var element=getElement(colour);
        if(element instanceof Water){
            waterCount++;
        }
        newGameArray=element.move(i, gameArray, canvasData, newGameArray, updatedPositions);
    }
    console.log(waterCount);
    
    return newGameArray;
}




export {step};