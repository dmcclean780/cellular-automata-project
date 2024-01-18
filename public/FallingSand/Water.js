import {Element} from "./Elements.js"
import {getElement } from "./ElementColourMap.js";
import { Empty } from "./Empty.js";


class Water extends Element{
    density=1000;
    dispersionRate=5;
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
            if(i+canvasData.width+1<canvasData.width*canvasData.height&& updatedPositions.indexOf(i+canvasData.width+1)==-1 && i%canvasData.width!=canvasData.width-1){
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
                    updatedPositions.push(i+canvasData.width-1)
                    return newGameArray
                }
            }
        }
        dir=Math.random() < 0.5;
        if(dir){
            for(var j=0; j<this.dispersionRate; j++){
                gameArray=newGameArray.slice()
                var neighbourColour=gameArray[i+j+1]
                neighbourColour&=0x00ffffff;
                var neighbourElement=getElement(neighbourColour);
                if(updatedPositions.indexOf(i+j+1)==-1 && i%canvasData.width!=canvasData.width-1 && this.density>neighbourElement.density){
                    newGameArray[i+j]=gameArray[i+j+1];
                    newGameArray[i+j+1]=gameArray[i+j];
                    updatedPositions.push(i+j+1)
                }
                else{
                    return newGameArray
                }
            }
            return newGameArray
        }
        if(!dir){
            for(var j=0; j<this.dispersionRate; j++){
                gameArray=newGameArray.slice()
                var neighbourColour=newGameArray[i-j-1]
                neighbourColour&=0x00ffffff;
                var neighbourElement=getElement(neighbourColour);
                if(updatedPositions.indexOf(i-j-1)==-1 && i%canvasData.width!=0 && this.density>neighbourElement.density && i-j-1<canvasData.width*canvasData.height){
                    newGameArray[i-j]=gameArray[i-j-1];
                    newGameArray[i-j-1]=gameArray[i-j];
                    updatedPositions.push(i-j-1)
                }
                else{
                    return newGameArray
                }
            }
        }
        
        return newGameArray
    }
}

export {Water}