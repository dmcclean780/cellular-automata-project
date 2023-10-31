



//Pair of functions to find the x and y coordinates of a mouse click
//Taken and adapted from https://stackoverflow.com/questions/20516311/drawing-a-circle-in-a-canvas-on-mouseclick and https://stackoverflow.com/questions/40753016/mouse-coordinates-on-canvas-after-css-scale
function getMousePositionX(canvas, e) { 
    var x = e.clientX - canvas.offsetLeft;
    const canvasX = Math.round(x * canvas.width / canvas.clientWidth);
    return canvasX;
} 

function getMousePositionY(canvas,e){
    var y = e.clientY - canvas.offsetTop;
    const canvasY = Math.round(y * canvas.height / canvas.clientHeight);
    return canvasY;
}

//Function to listen for a mouse click
function listenForClick(canvas, gameArray){
    canvas.addEventListener("mousedown", function (e) {
        var canvasX=getMousePositionX(canvas,e);
        var canvasY=getMousePositionY(canvas,e);
        updateArray(canvasX, canvasY, gameArray);
    });
}

//Function to update the gameArray item to be true
function updateArray(x,y, gameArray){
    gameArray[x][y]=true;
}



export{listenForClick};


    
