//File containing code to execute the Simulation

//Import Statments to import the required subroutines from other files.
import { renderArray } from "./canvasOutput.js";
import { createArray, indexToCoord, coordToIndex} from "./gameOfLifeArray.js";

//Function to move the simulation on 1 generation
function step(gameArray, canvas){
    var genNoHTML =document.getElementById("genNo.");
    var genNo = genNoHTML.innerHTML;
    genNo++;
    genNoHTML.innerHTML=genNo;
    var newGameArray = gameOfLife(gameArray, canvas);
    renderArray(canvas, newGameArray);
    return newGameArray;
}

//Function to find how many alive cells surround a given cell
function findNeighbors(gameArray, index, canvas){
    var aliveNeighbors=0;
    var width=canvas.width;
    var height=canvas.height;
    var coord = indexToCoord(index, canvas);
    var nextIndex;
  if(coord[0]>0){
    nextIndex = coordToIndex(coord[0]-1, coord[1], canvas);
    if(gameArray[nextIndex]){ //Horizontally Left
        aliveNeighbors++;
    }
    if(coord[1]<height-1){
        nextIndex = coordToIndex(coord[0]-1, coord[1]-1, canvas);
        if(gameArray[nextIndex]){ //Diagonally Below Left
            aliveNeighbors++;
        }
    }
  }
  if(coord[1]>0){
    nextIndex = coordToIndex(coord[0], coord[1]-1, canvas);
    if(gameArray[nextIndex]){ //Vertcally Above
        aliveNeighbors++;
    }
    if(coord[0]<width-1){
        nextIndex = coordToIndex(coord[0]+1, coord[1]-1, canvas);
        if(gameArray[nextIndex]){ //Diagonally Above Right
            aliveNeighbors++;
        }
    }
    
  }
  if(coord[0]>0 && coord[1]>0){
    nextIndex = coordToIndex(coord[0]-1, coord[1]-1, canvas);
    if(gameArray[nextIndex]){ //Diagonally Above Left
        aliveNeighbors++;
    }
  }
  if(coord[0]<width-1){
    nextIndex = coordToIndex(coord[0]+1, coord[1], canvas);
    if(gameArray[nextIndex]){ //Horixontally Right
        aliveNeighbors++;
    }
  }
  if(coord[1]<height-1){
    nextIndex = coordToIndex(coord[0], coord[1]+1, canvas);
    if(gameArray[nextIndex]){ //Vertically Below
        aliveNeighbors++;
    }
  }
  if(coord[0]<width-1 && coord[1]<height-1){
    nextIndex = coordToIndex(coord[0]+1, coord[1]+1, canvas);
    if(gameArray[nextIndex]){//Diagonally Below Right
        aliveNeighbors++;
    }
  }
    
    return aliveNeighbors;
}

//Function to execute the game of life rules on every cell.
function gameOfLife(gameArray, canvas){
    const width=canvas.width;
    const height=canvas.height;
    var newGameArray=createArray(width, height);
    for(var i=0; i<width*height; i++){
            var aliveNeighbors=findNeighbors(gameArray, i, canvas);
            if(gameArray[i]==true){ //If cells alive
                if(aliveNeighbors==2 || aliveNeighbors==3){
                    newGameArray[i]=true;
                }
            }
            if(gameArray[i]==false){ //If cells dead
                if(aliveNeighbors==3){ //Born if surrounded by exactly 3
                    newGameArray[i]=true;
                }
            }
    }
    return newGameArray;
}

//Code to export the step function
export{step};
