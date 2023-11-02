import { createArray } from "./gameOfLifeArray.js";
import { handleClick } from "./canvasInput.js";
import { step } from  "./gameOfLife.js";
import { renderArray } from "./canvasOutput.js";

let gameArray;
var interval = null;

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

function reset(){
    const canvas=document.getElementById("canvas");
    var width=canvas.width;
    var height=canvas.height;
    gameArray=createArray(width, height);
    renderArray(canvas, gameArray);
    var genNoHTML =document.getElementById("genNo.");
    var genNo = 0;
    genNoHTML.innerHTML=genNo;
}

function run(){
    var i = 0;
    interval = setInterval(function () {
        runGame();  // this is inside your loop
     }, 1000);
};
 
function stop() {
     clearInterval(interval);
};

function runGame(){
    stepGame();
    setTimeout(()=>{runGame; }, 1000)
}

var stepButton=document.getElementById("stepButton");
stepButton.addEventListener("click", stepGame);

var resetButton=document.getElementById("resetButton");
resetButton.addEventListener("click", reset);

var runButton=document.getElementById("runButton");
runButton.addEventListener("click", run);

var stopButton=document.getElementById("stopButton");
stopButton.addEventListener("click", stop);



