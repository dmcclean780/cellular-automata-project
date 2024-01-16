
function step(gameArray, canvasData, newGameArray){
    newGameArray=gameArray.slice()
    for(var i=0; i<gameArray.length; i++){
        var colour=gameArray[i];
        colour &= 0x00ffffff;
        if(colour==0x8CE6F0){
            newGameArray=moveSand(i,gameArray, canvasData, newGameArray);
        }
        
    }
    return newGameArray;
}

function moveSand(i, gameArray, canvasData, newGameArray){
    if(gameArray[i+canvasData.width]==0x00000000 && i+canvasData.width<canvasData.width*canvasData.height){
        newGameArray[i]=gameArray[i+canvasData.width];
        newGameArray[i+canvasData.width]=gameArray[i];
        return newGameArray
    }
    
    if(gameArray[i+canvasData.width-1]==0x00000000 && i+canvasData.width-1<canvasData.width*canvasData.height){
        newGameArray[i]=gameArray[i-canvasData.width-1];
        newGameArray[i-canvasData.width-1]=gameArray[i];
      return newGameArray
    }
    if(gameArray[i+canvasData.width+1]==0x00000000 && i+canvasData.width+1<canvasData.width*canvasData.height){
        newGameArray[i]=gameArray[i-canvasData.width+1];
        newGameArray[i-canvasData.width+1]=gameArray[i];
      return newGameArray
    }
    return newGameArray;
}

export {step};