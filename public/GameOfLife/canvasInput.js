//File containing code to give recieve input form the canvas

//Code to import the renderArray procedure
import { renderArray } from "./canvasOutput.js";
import { coordToIndex } from "./array.js";

let paint = false;
let erase = false;

//Pair of functions to find the x and y coordinates of a mouse click
//Taken and adapted from https://stackoverflow.com/questions/20516311/drawing-a-circle-in-a-canvas-on-mouseclick and https://stackoverflow.com/questions/40753016/mouse-coordinates-on-canvas-after-css-scale
function getMousePositionX(canvasData, drawingData) { 
    var rect = drawingData.rect;
    var x = drawingData.clientX - rect.left;
    var canvasX = Math.round(x * canvasData.width / canvasData.clientWidth);
    return canvasX;
} 

function getMousePositionY(canvasData,drawingData){
    var rect = drawingData.rect;
    var y = drawingData.clientY - rect.top;
    var canvasY = Math.round(y * canvasData.height / canvasData.clientHeight);
    return canvasY;
}

//Procedure to handle a mouse click
function startPainting(drawingData, gameArray, canvasData){
    paint = true;
    var drawOrgX =getMousePositionX(canvasData, drawingData);
    var drawOrgY =getMousePositionY(canvasData, drawingData);
    updateArray(drawOrgX, drawOrgY, gameArray);
    renderArray(canvasData, gameArray)
}

function stopPainting(){
    paint = false;
    
}
            
function sketch(drawingData, gameArray, canvasData){
    if (!paint) return;
    var drawX =getMousePositionX(canvasData, drawingData);
    var drawY =getMousePositionY(canvasData, drawingData);
    updateArray(drawX, drawY, gameArray);
    renderArray(canvasData, gameArray)
}

function eraseMode(eraseButton){
    if(!erase){
        eraseButton.style.backgroundColor="red";
        erase=true;
        
    }
    else{
        eraseButton.style.backgroundColor="white";
        erase=false;
    }
    
}

//Procedure to update the gameArray item to be true
function updateArray(x,y, gameArray){
    var index = coordToIndex(x,y, canvas)
    if(erase){
        gameArray[index]=0x00000000;
    }
    else{
        gameArray[index]=0xff00ff00;
    }    
}


//Code to export the handleClick procedure
export{startPainting, stopPainting, sketch, eraseMode};


    
