//Controller JavaScript file linking all others to the html page

//Code to import the required functions from other javaScript files
import { createArray } from "./gameOfLifeArray.js";
import { startPainting, stopPainting, sketch, eraseMode } from "./canvasInput.js";
import { step } from  "./gameOfLife.js";
import { renderArray } from "./canvasOutput.js";
import { CanvasData } from "./canvasClass.js";

//Code to decalare the variables that must have a global scope
let gameArray;
let value =0;
let stopSim=false;
let speed;
let canvasData;
let newGameArray;


//Block of code to create the array and listen for a mouse click
window.addEventListener("load", (event)=>{
  const canvas=document.getElementById("canvas");
  const width=canvas.width;
  const height=canvas.height;
  const ctx = canvas.getContext("2d");
  const clientWidth=canvas.clientWidth;
  const clientHeight=canvas.clientHeight;
  canvasData = new CanvasData(width, height, ctx, clientWidth, clientHeight);
  gameArray=createArray(canvasData);
  newGameArray=createArray(canvasData);
  canvas.addEventListener('mousedown', (event)=> startPainting(event, gameArray, canvasData, true));
  canvas.addEventListener('mouseup', (event)=> stopPainting(gameArray, canvasData));
  canvas.addEventListener('mousemove', (event)=> sketch(event, gameArray, canvasData, true));
  canvas.addEventListener('touchstart', (event)=> startPainting(event, gameArray, canvasData, false));
  canvas.addEventListener('touchend', (event)=> stopPainting(gameArray, canvasData));
  canvas.addEventListener('touchmove', (event)=> startPainting(event, gameArray, canvasData, false));
})

window.addEventListener("resize", (event)=>{const canvas=document.getElementById("canvas");
  const width=canvas.width;
  const height=canvas.height;
  const ctx = canvas.getContext("2d");
  const clientWidth=canvas.clientWidth;
  const clientHeight=canvas.clientHeight;
  canvasData = new CanvasData(width, height, ctx, clientWidth, clientHeight);
})

//Procedure to move the game on 1 generation
function stepGame(){
  gameArray = step(gameArray, canvasData, newGameArray);
  newGameArray=createArray(canvasData);
}

//Procedure to reset the game
function reset(){
  stop();
  var width=canvasData.width;
  var height=canvasData.height;
  gameArray=createArray(width, height);
  renderArray(canvasData, gameArray);
  var genNoHTML =document.getElementById("genNo.");
  var genNo = 0;
  genNoHTML.innerHTML=genNo;
}

//Function to find the speed to run the simulation at
function findSpeed(){
  var n=speedSlider.value;
  var speed=60-n;
  return speed;
}



//Taken and adapted from https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
//Procedure to start running the simulation
function run(){
  value=0;
  stopSim=false;
  requestAnimationFrame(firstFrame);
};


//Procedure for what to do on the first frame
function firstFrame() {
  speed=findSpeed();
  animate();
}

//Recursive procedure to animate the simulation at the correct speed
function animate() {
  var newSpeed=findSpeed();
  if(speed!=newSpeed){
    run();
  }
  else{
    if (value == speed) {
        value=0;
        
        if(stopSim==false){
          stepGame();
          requestAnimationFrame((t) => animate(t));
        }
      } 
      else {
        value++;
        requestAnimationFrame((t) => animate(t));
      }
  }
  
}

//Procedure to clear the intreval and stop it
function stop() {
  stopSim=true
};

function randomiseArray(){
  var width = canvasData.width;
  var height= canvasData.height;
  for(var i=0; i<width*height; i++){
    gameArray[i]=Math.random() < 0.5;
  }
  renderArray(canvasData, gameArray);
}

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

var eraseButton=document.getElementById("eraseButton");
eraseButton.addEventListener("click", (event)=> eraseMode(eraseButton));

var randoButton=document.getElementById("random");
randoButton.addEventListener("click", randomiseArray)




