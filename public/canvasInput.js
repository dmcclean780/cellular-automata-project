import { renderArray } from "./canvasOutput.js";



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

//Function to listen for a mouse click

function handleClick(canvas, gameArray, e) {
        var canvasX=getMousePositionX(canvas,e);
        var canvasY=getMousePositionY(canvas,e);
        updateArray(canvasX, canvasY, gameArray);
        renderArray(canvas, gameArray);
}

//Function to update the gameArray item to be true
function updateArray(x,y, gameArray){
    gameArray[x][y]=true;
}



export{handleClick};


    
