//Code to draw on load
//Taken from https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage
function draw() {
    const canvas = document.getElementById("FallingSandCanvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = "rgb(255, 255, 0)";
        ctx.arc(75, 75, 50, 0, 2*Math.PI, false);
        ctx.fill();

        
    }
  }
  window.addEventListener("load", draw);