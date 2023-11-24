//File containing code to initilaise the game Array

//Function to create the gameArray and set every item to be false
function createArray(canvasData){
    var gameArray= new Array(canvasData.width*canvasData.height);
    for (var i=0; i<canvasData.width*canvasData.height; i++ ){
        gameArray[i]=false;
    }
    return gameArray
}

function coordToIndex(x,y,canvasData){
    var index = (y*canvasData.width)+x;
    return index;
}

function indexToCoord(index,canvasData){
    var y = Math.floor(index/canvasData.width);
    var x = index%canvas.width;
    var coord = [x,y];
    return coord;
}

//Code to export the above function
export{createArray, coordToIndex, indexToCoord};