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
    for(var i=-1; i<2; i++){
        for(var j=-1; j<2; j++){
            var nextX=coord[0]+j;
            var nextY=coord[1]+i;
            nextIndex=coordToIndex(nextX, nextY, canvas);
            if(gameArray[nextIndex] == true && nextIndex != index){
                aliveNeighbors++;
            }
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
            if(gameArray[i]==true){
                if(aliveNeighbors<2 || aliveNeighbors>3 ){
                    newGameArray[i]=false;
                }
                else{
                    newGameArray[i]=true;
                }
            }
            if(gameArray[i]==false){
                if(aliveNeighbors==3){
                    newGameArray[i]=true;
                }
                else{
                    newGameArray[i]=false;
                }
            }          

    }
    return newGameArray;
}

//Code to export the step function
export{step};
