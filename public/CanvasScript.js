

//Code to draw on a pixel on screen
//Taken from https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage
function draw(x, y, canvas) {
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgb(255, 255, 0)";
        ctx.fillRect(x,y,1,1);
    }
  }

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
function listenForClick(canvas, gameArray, width, height){
    canvas.addEventListener("mousedown", function (e) {
        var canvasX=getMousePositionX(canvas,e);
        var canvasY=getMousePositionY(canvas,e);
        updateArray(canvasX, canvasY, gameArray);
        renderArray(canvas, gameArray, width, height)
    });
}

//Function to update the gameArray item to be true
function updateArray(x,y, gameArray){
    gameArray[x][y]=true;
}

function renderArray(canvas, gameArray, width, height){ 
    for(var i=0; i<width; i++){
        for(var j=0; j<height; j++){
            if(gameArray[i][j]==true){
                draw(i,j,canvas);
            }
        }
    }
}

export{listenForClick, getMousePositionX, getMousePositionY, draw, updateArray, renderArray};


    
