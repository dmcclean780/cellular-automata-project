class Element{
    move(i, gameArray, canvasData, newGameArray){
        return newGameArray;
    }
}

class Sand extends Element{
    move(i, gameArray, canvasData, newGameArray){
        if(gameArray[i+canvasData.width]==0x00000000 && i+canvasData.width<canvasData.width*canvasData.height){
            newGameArray[i]=gameArray[i+canvasData.width];
            newGameArray[i+canvasData.width]=gameArray[i];
            return newGameArray
        }
        var dir=Math.random() < 0.5;
        if(dir){
            if(gameArray[i+canvasData.width-1]==0x00000000 && i+canvasData.width-1<canvasData.width*canvasData.height){
                newGameArray[i]=gameArray[i+canvasData.width-1];
                newGameArray[i+canvasData.width-1]=gameArray[i];
              return newGameArray
            }
        }
        if(gameArray[i+canvasData.width+1]==0x00000000 && i+canvasData.width+1<canvasData.width*canvasData.height){
            newGameArray[i]=gameArray[i+canvasData.width+1];
            newGameArray[i+canvasData.width+1]=gameArray[i];
          return newGameArray
        }
        return newGameArray;
    }
}

export{Sand}