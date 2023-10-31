import { renderArray } from "./canvasOutput.js";

function step(gameArray, canvas){
    gameArray[10][10]=true;
    var width=canvas.width
    var height=canvas.height;
    renderArray(canvas, gameArray, width, height);
}

export{step};
