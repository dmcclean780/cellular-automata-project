window.addEventListener("load", (event)=>{
    const canvas = document.getElementById("GameOfLife");
    const width=canvas.width;
    const height=canvas.height;
    var gameArray=Array(width).fill(null).map(() => Array(height));
    for (var i=0; i<width; i++ ){
        for(var j=0; j<height; j++){
            gameArray[i][j]=false;
        }
    }
})
export {gameArray};