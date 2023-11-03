//Code to import the required functions from other javaScript files
import { createArray } from "./gameOfLifeArray.js";
import { handleClick } from "./canvasInput.js";
import { step } from  "./gameOfLife.js";
import { renderArray } from "./canvasOutput.js";

//Code to create the variables that must have a global scope
let gameArray;
var interval = null;

//Block of code to create the array and listen for a mouse click
window.addEventListener("load", (event)=>{
    const canvas=document.getElementById("canvas");
    var width=canvas.width;
    var height=canvas.height;
    gameArray=createArray(width, height);
    canvas.addEventListener("mousedown", (event) => handleClick(canvas, gameArray, event));
})

//Procedure to move the game on 1 generation
function stepGame(){
    const canvas=document.getElementById("canvas");
    gameArray = step(gameArray, canvas);
}

//Procedure to reset the game
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

//Function to find the time for the interval
function findSpeed(){
    var n=speedSlider.value;
    var speed=1000+n*(-980/49);
    return speed;
}

//Taken and adapted from https://stackoverflow.com/questions/29173956/start-and-stop-loop-in-javascript-with-start-and-stop-button
//Procedure to stepGame every time an interval elapses
function run(){
    var speed=findSpeed();
    stop();
    console.log(speed);
    interval = setInterval(function () {
        var newSpeed = findSpeed();
        if(speed!= newSpeed){
            stop();
            run();
        }
        stepGame(); 
     }, speed);
};

//Procedure to clear the intreval and stop it
function stop() {
    clearInterval(interval);
};

//Sections of code to retrive buttons what to do when they are clicked
var stepButton=document.getElementById("stepButton");
stepButton.addEventListener("click", stepGame);

var resetButton=document.getElementById("resetButton");
resetButton.addEventListener("click", reset);

var runButton=document.getElementById("runButton");
runButton.addEventListener("click", run);

var stopButton=document.getElementById("stopButton");
stopButton.addEventListener("click", stop);

var speedSlider=document.getElementById("speed");




