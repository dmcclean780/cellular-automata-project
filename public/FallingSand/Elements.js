class Element{
    move(i, gameArray, canvasData, newGameArray){
        return newGameArray;
    }
}

class Void extends Element{
}

class Sand extends Element{

    move(i, gameArray, canvasData, newGameArray){
        if(gameArray[i+canvasData.width]==0 && i+canvasData.width<canvasData.width*canvasData.height){
            newGameArray[i]=gameArray[i+canvasData.width];
            newGameArray[i+canvasData.width]=gameArray[i];
            return newGameArray
        }
        var dir=Math.random() < 0.5;
        if(dir){
            if(gameArray[i+canvasData.width-1]==0 && gameArray[i-1]==0  && i+canvasData.width-1<canvasData.width*canvasData.height){
                newGameArray[i]=gameArray[i+canvasData.width-1];
                newGameArray[i+canvasData.width-1]=gameArray[i];
              return newGameArray
            }
        }
        if(gameArray[i+canvasData.width+1]==0 && gameArray[i+1]==0 && i+canvasData.width+1<canvasData.width*canvasData.height){
            newGameArray[i]=gameArray[i+canvasData.width+1];
            newGameArray[i+canvasData.width+1]=gameArray[i];
          return newGameArray
        }
        return newGameArray;
    }
}

class Water extends Element{
    move(i, gameArray, canvasData, newGameArray){
        if(gameArray[i+canvasData.width]==0 && i+canvasData.width<canvasData.width*canvasData.height){
            newGameArray[i]=gameArray[i+canvasData.width];
            newGameArray[i+canvasData.width]=gameArray[i];
            return newGameArray
        }
        var dir=Math.random() < 0.5;
        if(dir){
            if(gameArray[i+canvasData.width-1]==0 && gameArray[i-1]==0  && i+canvasData.width-1<canvasData.width*canvasData.height){
                newGameArray[i]=gameArray[i+canvasData.width-1];
                newGameArray[i+canvasData.width-1]=gameArray[i];
              return newGameArray
            }
        }
        if(gameArray[i+canvasData.width+1]==0 && gameArray[i+1]==0 && i+canvasData.width+1<canvasData.width*canvasData.height){
            newGameArray[i]=gameArray[i+canvasData.width+1];
            newGameArray[i+canvasData.width+1]=gameArray[i];
          return newGameArray
        }
        dir=Math.random() < 0.5;
        if(dir){
            if(gameArray[i+1]==0){
                newGameArray[i]=gameArray[i+1];
                newGameArray[i+1]=gameArray[i];
              return newGameArray
            }
        }
        if(gameArray[i-1]==0){
            newGameArray[i]=gameArray[i-1];
            newGameArray[i-1]=gameArray[i];
          return newGameArray
        }

        return newGameArray;
    }
}

class Stone extends Element{

}

export{Sand, Water, Stone, Void}