import { Sand } from "./Elements.js";

function step(gameArray, canvasData, newGameArray){
    newGameArray=gameArray.slice()
    for(var i=0; i<gameArray.length; i++){
        var colour=gameArray[i];
        colour &= 0x00ffffff;
        if(colour==0x8CE6F0){
            var element = new Sand
            newGameArray=element.move(i,gameArray, canvasData, newGameArray);
        }
        
    }
    return newGameArray;
}


export {step};