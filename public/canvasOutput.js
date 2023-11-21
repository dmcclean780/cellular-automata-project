//File containg code to output to the canvas

import { indexToCoord } from "./gameOfLifeArray.js";

//Procedure to draw on a pixel on screen
//Taken and adapted from https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage
function draw(index, canvas, colour) {
    var coord =indexToCoord(index, canvas);
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = colour;
        ctx.fillRect(coord[0],coord[1],1,1);
    }
  }

//Procedure to update every pixel  
  function renderArray(canvas, gameArray){ 
    var width=canvas.width;
    var height=canvas.height;
    for(var i=0; i<width*height; i++){
            if(gameArray[i]==true){
                let colour="green"
                draw(i, canvas, colour);
            }
            else{
                let colour="#000000"
                draw(i, canvas, colour)
            }
    }
}

//Code to export the renderArray procedure 
export{renderArray};