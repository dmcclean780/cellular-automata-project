//Controller JavaScript file linking all others to the html page

//Code to import the required functions from other javaScript files
import { createArray } from "./gameOfLifeArray.js";
import { startPainting, stopPainting, sketch, eraseMode } from "./canvasInput.js";
import { step } from  "./gameOfLife.js";
import { renderArray } from "./canvasOutput.js";

//Code to decalare the variables that must have a global scope
let gameArray;
let value =0;
let stopSim=false;
let speed;


//Block of code to create the array and listen for a mouse click
window.addEventListener("load", (event)=>{
  const canvas=document.getElementById("canvas");
  var width=canvas.width;
  var height=canvas.height;
  gameArray=createArray(width, height);
  canvas.addEventListener('mousedown', (event)=> startPainting(event, gameArray, canvas));
  canvas.addEventListener('mouseup', (event)=> stopPainting(gameArray, canvas));
  canvas.addEventListener('mousemove', (event)=> sketch(event, gameArray, canvas));
})

//Procedure to move the game on 1 generation
function stepGame(){
  const canvas=document.getElementById("canvas");
  gameArray = step(gameArray, canvas);
}

//Procedure to reset the game
function reset(){
  stop();
  const canvas=document.getElementById("canvas");
  var width=canvas.width;
  var height=canvas.height;
  gameArray=createArray(width, height);
  renderArray(canvas, gameArray);
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




