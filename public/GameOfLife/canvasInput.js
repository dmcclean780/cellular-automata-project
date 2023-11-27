//File containing code to give recieve input form the canvas

//Code to import the renderArray procedure
import { renderArray } from "./canvasOutput.js";
import { coordToIndex } from "./array.js";

let paint = false;
let erase = false;

//Pair of functions to find the x and y coordinates of a mouse click
//Taken and adapted from https://stackoverflow.com/questions/20516311/drawing-a-circle-in-a-canvas-on-mouseclick and https://stackoverflow.com/questions/40753016/mouse-coordinates-on-canvas-after-css-scale
function getMousePositionX(canvasData, e, mouseEvent) { 
    var rect = e.target.getBoundingClientRect();
    if(mouseEvent){
        var x = e.clientX - rect.left;
    }
    else{
        var x = e.touches[0].clientX - rect.left;
    }
    
    var canvasX = Math.round(x * canvasData.width / canvasData.clientWidth);
    return canvasX;
} 

function getMousePositionY(canvasData,e, mouseEvent){
    var rect = e.target.getBoundingClientRect();
    if (mouseEvent){
        var y = e.clientY - rect.top;
    }
    else{
        var y = e.touches[0].clientY - rect.top;
    }
    var canvasY = Math.round(y * canvasData.height / canvasData.clientHeight);
    return canvasY;
}

//Procedure to handle a mouse click
function startPainting(event, gameArray, canvasData, mouseEvent){
    paint = true;
    var drawOrgX =getMousePositionX(canvasData, event, mouseEvent);
    var drawOrgY =getMousePositionY(canvasData, event, mouseEvent);
    updateArray(drawOrgX, drawOrgY, gameArray);
    renderArray(canvasData, gameArray)
}

function stopPainting(){
    paint = false;
    
}
            
function sketch(event, gameArray, canvasData, mouseEvent){
    if (!paint) return;
    var drawX =getMousePositionX(canvasData, event, mouseEvent);
    var drawY =getMousePositionY(canvasData, event, mouseEvent);
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


    
