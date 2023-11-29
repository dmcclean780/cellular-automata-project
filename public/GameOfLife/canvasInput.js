//File containing code to give recieve input form the canvas

//Code to import the renderArray procedure
import { renderArray } from "./canvasOutput.js";
import { coordToIndex } from "./array.js";

let paint = false;
let erase = false;
let orgX;
let orgY;

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
    orgX =getMousePositionX(canvasData, drawingData);
    orgY =getMousePositionY(canvasData, drawingData);
    updateArray(orgX, orgY, gameArray);
    renderArray(canvasData, gameArray)
}

function stopPainting(){
    paint = false;
    
}
            
function sketch(drawingData, gameArray, canvasData){
    if (!paint) return;
    var curX=getMousePositionX(canvasData, drawingData);
    var curY =getMousePositionY(canvasData, drawingData);
    console.log("origin:" ,orgX, " ", orgY);
    console.log("current Pos:" ,curX, " ", curY);
    drawLine(curX, curY, gameArray, canvasData);
    renderArray(canvasData, gameArray);
    orgX=curX;
    orgY=curY;
}

//Corrected Working Algorithim found at https://stackoverflow.com/questions/7478501/how-to-get-smooth-mouse-events-for-a-canvas-drawing-style-app
function drawLine(curX, curY, gameArray) {
    var x1 = curX,
        x2 = orgX, y1 = curY,
        y2 = orgY;
    var steep = (Math.abs(y2 - y1) > Math.abs(x2 - x1));
    if (steep) {
        var x = x1;
        x1 = y1;
        y1 = x;
        var y = y2;
        y2 = x2;
        x2 = y;
    }
    if (x1 > x2) {
        var x = x1;
        x1 = x2;
        x2 = x;
        var y = y1;
        y1 = y2;
        y2 = y;
    }
    var dx = x2 - x1,
        dy = Math.abs(y2 - y1),
        error = 0,
        de = dy / dx,
        yStep = -1,
        y = y1;
    if (y1 < y2) {
        yStep = 1;
    }
    for (var x = x1; x < x2; x++) {
        if (steep) {
            updateArray(y, x, gameArray)
        } else {
            updateArray(x, y, gameArray);
        }
        error += de;
        if (error >= 0.5) {
            y += yStep;
            error -= 1.0;
        }
    }
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


    
