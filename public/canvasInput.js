//File containing code to give recieve input form the canvas

//Code to import the renderArray procedure
import { renderArray } from "./canvasOutput.js";
import { coordToIndex } from "./gameOfLifeArray.js";

let paint = false;
let erase = false;

//Pair of functions to find the x and y coordinates of a mouse click
//Taken and adapted from https://stackoverflow.com/questions/20516311/drawing-a-circle-in-a-canvas-on-mouseclick and https://stackoverflow.com/questions/40753016/mouse-coordinates-on-canvas-after-css-scale
function getMousePositionX(canvas, e) { 
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left;
    const canvasX = Math.round(x * canvas.width / canvas.clientWidth);
    return canvasX;
} 

function getMousePositionY(canvas,e){
    var rect = e.target.getBoundingClientRect();
    var y = e.clientY - rect.top;;
    const canvasY = Math.round(y * canvas.height / canvas.clientHeight);
    return canvasY;
}

//Procedure to handle a mouse click
function startPainting(event, gameArray, canvas){
    paint = true;
    var canvasX =getMousePositionX(canvas, event);
    var canvasY =getMousePositionY(canvas, event);
    updateArray(canvasX, canvasY, gameArray);
    renderArray(canvas, gameArray)
}

function stopPainting(gameArray, canvas){
    paint = false;
    
}
            
function sketch(event, gameArray, canvas){
    if (!paint) return;
    var canvasX =getMousePositionX(canvas, event);
    var canvasY =getMousePositionY(canvas, event);
    updateArray(canvasX, canvasY, gameArray);
    renderArray(canvas, gameArray)
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


    
