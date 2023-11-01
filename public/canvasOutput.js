//Function to draw on a pixel on screen
//Taken from https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage
function draw(x, y, canvas, colour) {
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = colour;
        ctx.fillRect(x,y,1,1);
    }
  }

//Function to update every pixel  
  function renderArray(canvas, gameArray){ 
    var width=canvas.width;
    var height=canvas.height;
    for(var i=0; i<width; i++){
        for(var j=0; j<height; j++){
            if(gameArray[i][j]==true){
                let colour="green"
                draw(i, j, canvas, colour);
            }
            else{
                let colour="#000000"
                draw(i, j, canvas, colour)
            }
        }
    }
}

export{renderArray};