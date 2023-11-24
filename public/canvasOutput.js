//File containg code to output to the canvas

import { indexToCoord } from "./gameOfLifeArray.js";

var nextScreen = new Uint32Array(320*240);



//Procedure to update every pixel  
  function renderArray(canvasInfo, gameArray){ 
    var width=canvasInfo.width;
    var height=canvasInfo.height;
    var ctx=canvasInfo.ctx;
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