

function goToGameOfLife(){
    var clickSound=document.getElementById("clickSound");
    clickSound.play();
    var audioElement = document.getElementById("tileMusic");
    audioElement.pause();
    window.location.href=("GameOfLife/index.html");
};

function goToFallingSand(){
    var clickSound=document.getElementById("clickSound");
    clickSound.play();
    var audioElement = document.getElementById("tileMusic");
    audioElement.pause();
    window.location.href=("FallingSand/index.html");
};

window.addEventListener("click", (event)=>{
    var audioElement = document.getElementById("tileMusic");
    audioElement.play();
});
