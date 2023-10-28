//Code to draw on a pixel on screen
//Taken from https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage
function draw(x, y) {
    const canvas = document.getElementById("FallingSandCanvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgb(255, 255, 0)";
        ctx.fillRect(x,y,1,1);

        
    }
  }

//Pair of functions to find the x and y coordinates of a mouse click
//Taken and adapted from https://stackoverflow.com/questions/20516311/drawing-a-circle-in-a-canvas-on-mouseclick and https://stackoverflow.com/questions/40753016/mouse-coordinates-on-canvas-after-css-scale
function getMousePositionX(canvas, e) { 
    x = e.clientX - canvas.offsetLeft;
    const canvasX = Math.round(x * canvas.width / canvas.clientWidth);
    return canvasX;
} 

function getMousePositionY(canvas,e){
    y = e.clientY - canvas.offsetTop;
    const canvasY = Math.round(y * canvas.height / canvas.clientHeight);
    return canvasY;
}

//Block of code to listen for mouse clic and call draw procedure when a click occurs
window.addEventListener("load",(event)=>{
    const canvas = document.getElementById("FallingSandCanvas");
    canvas.addEventListener("mousedown", function (e) {
        canvasX=getMousePositionX(canvas,e);
        canvasY=getMousePositionY(canvas,e);
        draw(canvasX,canvasY);
    });
});
    
