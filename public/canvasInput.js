//File containing code to give recieve input form the canvas

//Code to import the renderArray procedure
import { renderArray } from "./canvasOutput.js";
import { coordToIndex } from "./gameOfLifeArray.js";

let paint = false;
let erase = false;

//Pair of functions to find the x and y coordinates of a mouse click
//Taken and adapted from https://stackoverflow.com/questions/20516311/drawing-a-circle-in-a-canvas-on-mouseclick and https://stackoverflow.com/questions/40753016/mouse-coordinates-on-canvas-after-css-scale
function getMousePositionX(canvasData, e) { 
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left;
    const canvasX = Math.round(x * canvasData.width / canvasData.clientWidth);
    return canvasX;
} 

function getMousePositionY(canvasData,e){
    var rect = e.target.getBoundingClientRect();
    var y = e.clientY - rect.top;;
    const canvasY = Math.round(y * canvasData.height / canvasData.clientHeight);
    return canvasY;
}

//Procedure to handle a mouse click
function startPainting(event, gameArray, canvasData){
    paint = true;
    var canvasX =getMousePositionX(canvasData, event);
    var canvasY =getMousePositionY(canvasData, event);
    updateArray(canvasX, canvasY, gameArray);
    renderArray(canvasData, gameArray)
}

function stopPainting(){
    paint = false;
    
}
            
function sketch(event, gameArray, canvasData){
    if (!paint) return;
    var canvasX =getMousePositionX(canvasData, event);
    var canvasY =getMousePositionY(canvasData, event);
    updateArray(canvasX, canvasY, gameArray);
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
        gameArray[index]=false;
    }
    else{
        gameArray[index]=true;
    }    
}


//Code to export the handleClick procedure
export{startPainting, stopPainting, sketch, eraseMode};


    
