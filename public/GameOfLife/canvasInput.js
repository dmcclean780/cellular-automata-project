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
    drawLine(curX, curY, gameArray, canvasData);
    orgX=curX;
    orgY=curY;
}

function drawLine(curX, curY, gameArray, canvasData){
    if(Math.abs(curY-orgY)< Math.abs(curX-orgX)){
        if(orgX>curX){
            drawLineLow(curX, curY, orgX, orgY, gameArray);
        }
        else{
            drawLineLow(orgX, orgY, curX, curY, gameArray);
        }
    }
    else{
        if(orgY>curY){
            drawLineHigh(curX, curY, orgX, orgY, gameArray);
        }
        else{
            drawLineHigh(orgX, orgY, curX, curY, gameArray);
        }
    }
    renderArray(canvasData, gameArray)
}

function drawLineLow(X0, Y0, X1, Y1, gameArray){
    var dx = X1-Y0;
    var dy = Y1-X0;
    var yi =1;
    if(dy<0){
        yi=-1;
        dy=-dy;
    }
    var D = 2*dy -dx;
    var y = Y0
    for(var x=X0; x<X1; x++){
        updateArray(x, y, gameArray);
        if(D>0){
            y=y+yi;
            D=D+2*(dy-dx);
        }
        else{
            D=D+2*dy;
        }
    }
}

function drawLineHigh(X0, Y0, X1, Y1, gameArray){
    var dx = X1-X0;
    var dy = Y1-Y0;
    var xi =1;
    if(dx<0){
        xi=-1;
        dx=-dx;
    }
    var D = 2*dx -dy;
    var x = X0;
    for(var y=Y0; y<Y1; y++){
        updateArray(x, y, gameArray);
        if(D>0){
            x=x+xi;
            D=D+2*(dx-dy);
        }
        else{
            D=D+2*dx;
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


    
