import { Sand, Water, Stone, Void } from "./Elements.js";

function step(gameArray, canvasData, newGameArray){
    newGameArray=gameArray.slice()
    for(var i=0; i<gameArray.length; i++){
        var colour=gameArray[i];
        colour &= 0x00ffffff;
        if(colour==0x8CE6F0){
            var element = new Sand
            newGameArray=element.move(i,gameArray, canvasData, newGameArray);
        }
        if(colour==0xFF901E){
            var element = new Water
            newGameArray=element.move(i,gameArray, canvasData, newGameArray);
        }
        if(colour==0xA9A9A9){
            var element = new Stone
            newGameArray=element.move(i,gameArray, canvasData, newGameArray);
        }
        if(colour==0x000000){
            var element = new Void
            newGameArray=element.move(i,gameArray, canvasData, newGameArray);
        }
        
        
    }
    return newGameArray;
}


export {step};