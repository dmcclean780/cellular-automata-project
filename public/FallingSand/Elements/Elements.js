import { getElement } from "../ElementColourMap.js";

class Element{
    density;
    acidResistance;
    poisonResistance;

    move(i, gameArray, canvasData, newGameArray, updatedPositions){
        return newGameArray;
    }
    swapPositions(newGameArray, updatedPositions, i0, i1){
        var temp=newGameArray[i0];
        newGameArray[i0]=newGameArray[i1];
        newGameArray[i1]=temp;
        updatedPositions.push(i1);
        return newGameArray
    }

    swapPositionsAcid(newGameArray, updatedPositions, i0, i1){
        newGameArray[i0]=0x00000000;
        newGameArray[i1]=0x00000000
        updatedPositions.push(i1)
        return newGameArray;
    }

    swapPositions2xAcid(newGameArray, updatedPositions, i0, i1){
        var temp=newGameArray[i0];
        newGameArray[i0]=0x00000000;
        newGameArray[i1]=temp
        updatedPositions.push(i1);
        return newGameArray;
    }

    swapPositionsLiquid(newGameArray, updatedPositions, i0, i1){
        var temp=newGameArray[i0];
        newGameArray[i0]=newGameArray[i1];
        newGameArray[i1]=temp;
        updatedPositions.push(i1);
        updatedPositions.push(i0);
        return newGameArray
    }

    swapPositionsPoison(newGameArray, updatedPositions, i0, i1){
        newGameArray[i1]=newGameArray[i0];
        updatedPositions.push(i1);
        return newGameArray
    }

    getNeighbourElement(gameArray, i){
        var neighbourColour=gameArray[i]
        neighbourColour&=0x00ffffff;
        var neighbourElement=getElement(neighbourColour);
        return neighbourElement;
    }
}



export{Element}