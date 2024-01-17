import {getElement } from "./ElementColourMap.js";
import { Sand, Water } from "./Elements.js";

function step(gameArray, canvasData, newGameArray){
    var waterCount=0
    var sandCount=0;
    newGameArray=gameArray.slice()
    var updatedPositions=[];
    for(var i=0; i<gameArray.length; i++){
        var colour=gameArray[i];
        colour &= 0x00ffffff;
        var element=getElement(colour);
        if (element instanceof Sand){
            sandCount++
        }
        if(element instanceof Water){
            waterCount++
        }
        newGameArray=element.move(i, gameArray, canvasData, newGameArray, updatedPositions);
    }
    console.log("sand", sandCount);
    console.log("water", waterCount);
    return newGameArray;
}




export {step};