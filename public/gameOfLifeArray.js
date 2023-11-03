
//Function to create the gameArray and set every item to be false
function createArray(width, height){
    var gameArray=Array(width).fill(null).map(() => Array(height));
    for (var i=0; i<width; i++ ){
        for(var j=0; j<height; j++){
            gameArray[i][j]=false;
        }
    }
    return gameArray
}
//Code to export the above function
export{createArray};