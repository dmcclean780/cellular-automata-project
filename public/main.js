import { createArray } from "./gameOfLifeArray.js";
import { handleClick } from "./canvasInput.js";
import { step } from  "./gameOfLife.js";

let gameArray;

window.addEventListener("load", (event)=>{
    const canvas=document.getElementById("canvas");
    var width=canvas.width;
    var height=canvas.height;
    gameArray=createArray(width, height);
    canvas.addEventListener("mousedown", (event) => handleClick(canvas, gameArray, event));
})

function stepGame(){
    const canvas=document.getElementById("canvas");
    gameArray = step(gameArray, canvas);
}

var stepButton=document.getElementById("stepButton");
stepButton.addEventListener("click", stepGame);


