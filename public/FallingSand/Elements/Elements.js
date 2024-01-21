import { getElement } from "../ElementColourMap.js";

class Element{
    density=0;
    acidResistance=1;
    poisonResistance=1;

    move(i, gameArray, canvasData, newGameArray, updatedPositions){
        return newGameArray;
    }
    swapPositions(newGameArray, gameArray, updatedPositions, i0, i1){
        newGameArray[i0]=gameArray[i1];
        newGameArray[i1]=gameArray[i0];
        updatedPositions.push(i1)
    }
    getNeighbourElement(gameArray, i){
        var neighbourColour=gameArray[i]
        neighbourColour&=0x00ffffff;
        var neighbourElement=getElement(neighbourColour);
        return neighbourElement;
    }
}



export{Element}