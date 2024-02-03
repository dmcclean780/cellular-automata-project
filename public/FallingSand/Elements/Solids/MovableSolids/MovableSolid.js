import { Empty } from "../../Empty.js";
import { Liquid } from "../../Liquids/Liquid.js";
import { Solid } from "../Solid.js";

class MovableSolid extends Solid{


    move(i, gameArray, canvasData, newGameArray, updatedPositions){
        if(i+canvasData.width<canvasData.width*canvasData.height && updatedPositions.indexOf(i+canvasData.width)==-1){
            var destinationElement = this.getNeighbourElement(gameArray, i+canvasData.width)
            if(this.density>destinationElement.density && destinationElement instanceof Liquid || destinationElement instanceof Empty){
                newGameArray=this.swapPositions(newGameArray, updatedPositions, i, i+canvasData.width)
                return newGameArray
            }
            
        }
        var dir=Math.random() < 0.5;
        if(dir){
            if(i+canvasData.width+1<canvasData.width*canvasData.height && updatedPositions.indexOf(i+canvasData.width+1)==-1 && i%canvasData.width!=canvasData.width-1){
                var adjacentElement = this.getNeighbourElement(gameArray, i+1);
                if(this.density>adjacentElement.density){
                    var destinationElement=this.getNeighbourElement(gameArray, i+canvasData.width+1);
                    if(this.density>destinationElement.density && destinationElement instanceof Liquid || destinationElement instanceof Empty){
                        newGameArray=this.swapPositions(newGameArray, updatedPositions, i, i+canvasData.width+1)
                        return newGameArray
                    }
                }
                
            }
        }
        if(i+canvasData.width-1<canvasData.width*canvasData.height && updatedPositions.indexOf(i+canvasData.width-1)==-1 && i%canvasData.width!=0){
            var adjacentElement=this.getNeighbourElement(gameArray, i-1);
            if(this.density>adjacentElement.density){
                var destinationElement=this.getNeighbourElement(gameArray, i+canvasData.width-1);
                if(this.density>destinationElement.density && destinationElement instanceof Liquid || destinationElement instanceof Empty){
                    newGameArray=this.swapPositions(newGameArray, updatedPositions, i, i+canvasData.width-1)
                    return newGameArray
                }
            }
        }
        return newGameArray;
    }
}

export {MovableSolid}