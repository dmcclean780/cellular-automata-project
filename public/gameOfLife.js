import { renderArray } from "./canvasOutput.js";
import { createArray } from "./gameOfLifeArray.js";

function step(gameArray, canvas){
    var genNoHTML =document.getElementById("genNo.");
    var genNo = genNoHTML.innerHTML;
    genNo++;
    genNoHTML.innerHTML=genNo;
    var newGameArray = gameOfLife(gameArray, canvas);
    renderArray(canvas, newGameArray);
    return newGameArray;
}

function findNeighbors(gameArray, x, y, canvas){
    var aliveNeighbors=0;
    var width=canvas.width;
    var height=canvas.height;
  if(x>0){
    if(gameArray[x-1][y]){
        aliveNeighbors++;
    }
    if(y<height-1){
        if(gameArray[x-1][y+1]){
            aliveNeighbors++;
        }
    }
  }
  if(y>0){
    if(gameArray[x][y-1]){
        aliveNeighbors++;
    }
    if(x<width-1){
        if(gameArray[x+1][y-1]){
            aliveNeighbors++;
        }
    }
    
  }
  if(x>0 && y>0){
    if(gameArray[x-1][y-1]){
        aliveNeighbors++;
    }
  }
  if(x<width-1){
    if(gameArray[x+1][y]){
        aliveNeighbors++;
    }
  }
  if(y<height-1){
    if(gameArray[x][y+1]){
        aliveNeighbors++;
    }
  }
  if(x<width-1 && y<height-1){
    if(gameArray[x+1][y+1]){
        aliveNeighbors++;
    }
  }
    
    return aliveNeighbors;
}

function gameOfLife(gameArray, canvas){
    const width=canvas.width;
    const height=canvas.height;
    var newGameArray=createArray(width, height);
    for(var i=0; i<width; i++){
        for(var j=0; j<height; j++){
            var aliveNeighbors=findNeighbors(gameArray, i, j, canvas);
            if(gameArray[i][j]==true){
                if(aliveNeighbors<2 || aliveNeighbors>3 ){
                    newGameArray[i][j]=false;
                }
                else{
                    newGameArray[i][j]=true;
                }
            }
            if(gameArray[i][j]==false){
                if(aliveNeighbors==3){
                    console.log("birth");
                    newGameArray[i][j]=true;
                    console.log(newGameArray[i][j]);
                }
                else{
                    newGameArray[i][j]==false;
                }
            }
        }
    }
    return newGameArray;
}
export{step};
