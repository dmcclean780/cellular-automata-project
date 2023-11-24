//File containing code to initilaise the game Array

//Function to create the gameArray and set every item to be false
function createArray(canvasInfo){
    var gameArray= new Array(canvasInfo.width*canvasInfo.height);
    for (var i=0; i<canvasInfo.width*canvasInfo.height; i++ ){
        gameArray[i]=false;
    }
    return gameArray
}

function coordToIndex(x,y,canvasInfo){
    var index = (y*canvasInfo.width)+x;
    return index;
}

function indexToCoord(index,canvasInfo){
    var y = Math.floor(index/canvasInfo.width);
    var x = index%canvas.width;
    var coord = [x,y];
    return coord;
}

//Code to export the above function
export{createArray, coordToIndex, indexToCoord};