//Code to draw on load
//Taken from https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage
function draw(x, y) {
    const canvas = document.getElementById("FallingSandCanvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgb(255, 255, 0)";
        ctx.fillRect(x,y,1,1);

        
    }
  }
//Taken and adapted from https://stackoverflow.com/questions/20516311/drawing-a-circle-in-a-canvas-on-mouseclick
function getMousePosition(canvas, e) { 
    x = e.clientX - canvas.offsetLeft;
    y = e.clientY - canvas.offsetTop;
    //Taken and adapted from https://stackoverflow.com/questions/40753016/mouse-coordinates-on-canvas-after-css-scale
    const canvasX = Math.round(x * canvas.width / canvas.clientWidth);
    const canvasY = Math.round(y * canvas.height / canvas.clientHeight);

    draw(canvasX,canvasY);
} 



window.addEventListener("load",(event)=>{
    const canvas = document.getElementById("FallingSandCanvas");
    //canvas.width=100;
    //canvas.height=75;
    canvas.addEventListener("mousedown", function (e) {
        getMousePosition(canvas,e);
    });
});
    
