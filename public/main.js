import { createArray } from "./gameOfLifeArray.js";
import { handleClick } from "./canvasInput.js";
import { step } from  "./gameOfLife.js";
import { renderArray } from "./canvasOutput.js";

let gameArray;
var interval = null;
var speed=1000;

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
function findSpeed(){
    var n=speedSlider.value;
    speed=1000+n*(-980/59);
}

//Taken and adapted from https://stackoverflow.com/questions/29173956/start-and-stop-loop-in-javascript-with-start-and-stop-button
function run(){
    findSpeed();
    interval = setInterval(function () {
        console.log(speed);
        findSpeed();
        stepGame(); 
     }, speed);
};
 
function stop() {
    clearInterval(interval);
};


var stepButton=document.getElementById("stepButton");
stepButton.addEventListener("click", stepGame);

var resetButton=document.getElementById("resetButton");
resetButton.addEventListener("click", reset);

var runButton=document.getElementById("runButton");
runButton.addEventListener("click", run);

var stopButton=document.getElementById("stopButton");
stopButton.addEventListener("click", stop);

var speedSlider=document.getElementById("speed");




