//File containg code to output to the canvas

import { indexToCoord } from "./gameOfLifeArray.js";
const ctx = canvas.getContext("2d");
var nextScreen = new Uint32Array(320*240);


//Procedure to draw on a pixel on screen
//Taken and adapted from https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage
function draw(index, canvas, colour) {
    var coord =indexToCoord(index, canvas);
    if (canvas.getContext) {
        
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
                nextScreen[i]=0xff00ff00;
            }
            else{
                nextScreen[i]=0x00000000;
            }
    }
    var iData = new ImageData(new Uint8ClampedArray(nextScreen.buffer), width, height);
    ctx.putImageData(iData,0 ,0);
    
}

//Code to export the renderArray procedure 
export{renderArray};