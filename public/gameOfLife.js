//File containing code to execute the Simulation

//Import Statments to import the required subroutines from other files.
import { renderArray } from "./canvasOutput.js";
import { createArray } from "./gameOfLifeArray.js";

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
function findNeighbors(gameArray, x, y, canvas){
    var aliveNeighbors=0;
    var width=canvas.width;
    var height=canvas.height;
  if(x>0){
    if(gameArray[x-1][y]){ //Horizontally Left
        aliveNeighbors++;
    }
    if(y<height-1){
        if(gameArray[x-1][y+1]){ //Diagonally Below Left
            aliveNeighbors++;
        }
    }
  }
  if(y>0){
    if(gameArray[x][y-1]){ //Vertcally Above
        aliveNeighbors++;
    }
    if(x<width-1){
        if(gameArray[x+1][y-1]){ //Diagonally Above Right
            aliveNeighbors++;
        }
    }
    
  }
  if(x>0 && y>0){
    if(gameArray[x-1][y-1]){ //Diagonally Above Left
        aliveNeighbors++;
    }
  }
  if(x<width-1){
    if(gameArray[x+1][y]){ //Horixontally Right
        aliveNeighbors++;
    }
  }
  if(y<height-1){
    if(gameArray[x][y+1]){ //Vertically Below
        aliveNeighbors++;
    }
  }
  if(x<width-1 && y<height-1){
    if(gameArray[x+1][y+1]){//Diagonally Below Right
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
    for(var i=0; i<width; i++){
        for(var j=0; j<height; j++){
            var aliveNeighbors=findNeighbors(gameArray, i, j, canvas);
            if(gameArray[i][j]==true){ //If cells alive
                if(aliveNeighbors<2 || aliveNeighbors>3 ){ //Die if surrounded by less than 2 or more than 3
                    newGameArray[i][j]=false;
                }
                else{
                    newGameArray[i][j]=true;
                }
            }
            if(gameArray[i][j]==false){ //If cells dead
                if(aliveNeighbors==3){ //Born if surrounded by exactly 3
                    newGameArray[i][j]=true;
                }
                else{
                    newGameArray[i][j]==false;
                }
            }
        }
    }
    return newGameArray;
}

//Code to export the step function
export{step};
