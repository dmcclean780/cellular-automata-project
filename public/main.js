import { createArray} from "./gameOfLifeArray.js";
import { listenForClick, renderArray } from "./CanvasScript.js";

window.addEventListener("load", (event)=>{
    const canvas=document.getElementById("GameOfLife");
    var width=canvas.width;
    var height=canvas.height;
    var gameArray=createArray(width, height);
    listenForClick(canvas, gameArray, width, height);
})