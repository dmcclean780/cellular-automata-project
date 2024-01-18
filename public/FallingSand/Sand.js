import{Element} from "./Elements.js"
import {getElement } from "./ElementColourMap.js";

class Sand extends Element{
    density = 1631;
    dispersionRate=0

    
    move(i, gameArray, canvasData, newGameArray, updatedPositions){
        if(i+canvasData.width<canvasData.width*canvasData.height && updatedPositions.indexOf(i+canvasData.width)==-1){
            var neighbourColour=gameArray[i+canvasData.width]
            neighbourColour&=0x00ffffff;
            var neighbourElement=getElement(neighbourColour);
            if(this.density>neighbourElement.density){
                newGameArray[i]=gameArray[i+canvasData.width];
                newGameArray[i+canvasData.width]=gameArray[i];
                updatedPositions.push(i+canvasData.width)
                return newGameArray
            }
            
        }
        var dir=Math.random() < 0.5;
        if(dir){
            if(i+canvasData.width+1<canvasData.width*canvasData.height && updatedPositions.indexOf(i+canvasData.width+1)==-1 && i%canvasData.width!=canvasData.width-1){
                var adjacentColour=gameArray[i+1];
                adjacentColour&=0x00ffffff;
                var adjacentElement=getElement(adjacentColour);
                if(this.density>adjacentElement.density){
                    var neighbourColour=gameArray[i+canvasData.width+1]
                    neighbourColour&=0x00ffffff;
                    var neighbourElement=getElement(neighbourColour);
                    if(this.density>neighbourElement.density){
                        newGameArray[i]=gameArray[i+canvasData.width+1];
                        newGameArray[i+canvasData.width+1]=gameArray[i];
                        updatedPositions.push(i+canvasData.width+1)
                        return newGameArray
                    }
                }
                
            }
        }
        if(i+canvasData.width-1<canvasData.width*canvasData.height && updatedPositions.indexOf(i+canvasData.width-1)==-1 && i%canvasData.width!=0){
            var adjacentColour=gameArray[i-1];
            adjacentColour&=0x00ffffff;
            var adjacentElement=getElement(adjacentColour);
            if(this.density>adjacentElement.density){
                var neighbourColour=gameArray[i+canvasData.width-1]
                neighbourColour&=0x00ffffff;
                var neighbourElement=getElement(neighbourColour);
                if(this.density>neighbourElement.density){
                    newGameArray[i]=gameArray[i+canvasData.width-1];
                    newGameArray[i+canvasData.width-1]=gameArray[i];
                    updatedPositions.push(i+canvasData.width+1)
                    return newGameArray
                }
            }
        }
        return newGameArray;
    }
}

export{Sand}
