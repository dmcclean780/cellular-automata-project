//Controller JavaScript file linking all others to the html page

//Code to import the required functions from other javaScript files
import { createArray } from "./array.js";
import { startPainting, stopPainting, sketch, eraseMode } from "./canvasInput.js";
import { renderArray } from "./canvasOutput.js";
import { CanvasData } from "./canvasData.js";
import { DrawingData } from "./DrawingData.js";

//Code to decalare the variables that must have a global scope
let elementSelector;
let gameArray;
let value =0;
let stopSim=false;
let speed;
let canvasData;
let newGameArray;
var genNoHTML;
var genNo=0;
var startTime=0;
var fpsList=new Array(10);
var frame=1;
var fpsHTML;
var sum=0;

//Block of code to create the array and listen for a mouse click
window.addEventListener("load", (event)=>{
  setCanvasObj();
  gameArray=createArray(canvasData);
  newGameArray=createArray(canvasData);
  genNoHTML =document.getElementById("genNo.");
  fpsHTML=document.getElementById("fpsMeter");
  elementSelector=document.getElementById("element-select");
  canvas.addEventListener('mousedown', (event)=>{
    var mouseEvent=true;
    var drawingData= getDrawingData(event, mouseEvent);
    startPainting(drawingData, gameArray, canvasData);
  } );

  canvas.addEventListener('mouseup', (event)=> stopPainting(gameArray, canvasData));

  canvas.addEventListener('mousemove', (event)=>{
    var mouseEvent=true;
    var drawingData= getDrawingData(event, mouseEvent);
    sketch(drawingData, gameArray, canvasData)
  } );

  canvas.addEventListener('touchstart', (event)=>{
    var mouseEvent=false;
    var drawingData= getDrawingData(event, mouseEvent);
    startPainting(drawingData, gameArray, canvasData)
  } );

  canvas.addEventListener('touchend', (event)=> stopPainting(gameArray, canvasData));

  canvas.addEventListener('touchmove', (event)=>{
    var mouseEvent=false;
    var drawingData= getDrawingData(event, mouseEvent);
    sketch(drawingData, gameArray, canvasData)
  } );
})

window.addEventListener("resize", (event)=>{setCanvasObj();})

function getDrawingData(event, mouseEvent){
  var rect= event.target.getBoundingClientRect();
    if (mouseEvent){
      var clientY = event.clientY;
      var clientX = event.clientX
    }
    else{
      var clientY = event.touches[0].clientY;
      var clientX = event.touches[0].clientX;
    }
  var colour=elementSelector.value;
  var drawingData = new DrawingData(rect, clientX, clientY, colour);
  return drawingData;
}

function setCanvasObj(){
  const canvas=document.getElementById("canvas");
  const width=canvas.width;
  const height=canvas.height;
  const ctx = canvas.getContext("2d");
  const clientWidth=canvas.clientWidth;
  const clientHeight=canvas.clientHeight;
  canvasData = new CanvasData(width, height, ctx, clientWidth, clientHeight);
}

//Procedure to move the game on 1 generation
function stepGame(){
  var swap = step(gameArray, canvasData, newGameArray);
  newGameArray=gameArray;
  gameArray=swap;
  genNo++
  genNoHTML.innerHTML=genNo;
  renderArray(canvasData, newGameArray);
}

//Procedure to reset the game
function reset(){
  stop();
  gameArray=createArray(canvasData);
  renderArray(canvasData, gameArray);
  genNo = 0;
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
  speed=findSpeed();
  requestAnimationFrame(animate);
};

function findFPS(t){
  var timeDiff=t-startTime;
  startTime=t;
  var fps=1000/timeDiff;
  sum += fps;
  if(frame==fpsList.length){
    var avg=sum/fpsList.length;
    fpsHTML.innerHTML=avg.toFixed(1);
    sum=0;
    frame=0;
  }
  frame++
}

//Recursive procedure to animate the simulation at the correct speed
function animate(t) {
  findFPS(t);
  var newSpeed=findSpeed();
  if(speed!=newSpeed){
    run();
    return
  }
  if (value == speed) {
    value=0;        
    if(stopSim==false){
      stepGame();
      requestAnimationFrame((t)=>animate(t));
    }
    return
  } 
  value++;
  requestAnimationFrame((t)=>animate(t));
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

var randoButton=document.getElementById("random");
randoButton.addEventListener("click", randomiseArray)




