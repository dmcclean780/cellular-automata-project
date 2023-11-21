//File containing code to initilaise the game Array

//Function to create the gameArray and set every item to be false
function createArray(width, height){
    var gameArray= new Array(width*height);
    for (var i=0; i<width*height; i++ ){
        gameArray[i]=false;
    }
    return gameArray
}

function coordToIndex(x,y,canvas){
    var index = (y*canvas.width)+x;
    return index;
}

function indexToCoord(index,canvas){
    var y = Math.floor(index/canvas.width);
    var x = index%canvas.width;
    var coord = [x,y];
    return coord;
}

//Code to export the above function
export{createArray, coordToIndex, indexToCoord};