import {Element} from "./Elements.js"



class Water extends Element{
    density=1000;
    dispersionRate=10;

    
    move(i, gameArray, canvasData, newGameArray, updatedPositions){
        if(i+canvasData.width<canvasData.width*canvasData.height && updatedPositions.indexOf(i+canvasData.width)==-1){
            var neighbourElement = this.getNeighbourElement(gameArray, i+canvasData.width)
            if(this.density>neighbourElement.density){
                this.swapPositions(newGameArray, gameArray, updatedPositions, i, i+canvasData.width)
                return newGameArray
            }
            
        }
        var dir=Math.random() < 0.5;
        if(dir){
            if(i+canvasData.width+1<canvasData.width*canvasData.height && updatedPositions.indexOf(i+canvasData.width+1)==-1 && i%canvasData.width!=canvasData.width-1){
                var adjacentElement = this.getNeighbourElement(gameArray, i+1);
                if(this.density>adjacentElement.density){
                    var neighbourElement=this.getNeighbourElement(gameArray, i+canvasData.width+1);
                    if(this.density>neighbourElement.density){
                        this.swapPositions(newGameArray,gameArray, updatedPositions, i, i+canvasData.width+1);
                        return newGameArray
                    }
                }
                
            }
        }
        if(i+canvasData.width-1<canvasData.width*canvasData.height && updatedPositions.indexOf(i+canvasData.width-1)==-1 && i%canvasData.width!=0){
            var adjacentElement=this.getNeighbourElement(gameArray, i-1);
            if(this.density>adjacentElement.density){
                var neighbourElement=this.getNeighbourElement(gameArray, i+canvasData.width-1);
                if(this.density>neighbourElement.density){
                    this.swapPositions(newGameArray, gameArray, updatedPositions, i, i+canvasData.width-1);
                    return newGameArray
                }
            }
        }
        dir=Math.random() < 0.5;
        if(dir){
            var adjacentElement = this.getNeighbourElement(gameArray, i+1);
            if(this.density>adjacentElement.density){
                for(var j=0; j<this.dispersionRate; j++){
                    var adjacentElement = this.getNeighbourElement(gameArray, i+j+1);
                    if(updatedPositions.indexOf(i+j+1)==-1 && i%canvasData.width<canvasData.width-1 && this.density>adjacentElement.density){
                        var belowElement = this.getNeighbourElement(gameArray, i+canvasData.width+1)
                        if(this.density<=belowElement.density){
                            this.swapPositions(newGameArray, gameArray, updatedPositions, i+j, i+j+1)
                            gameArray[i+j]=newGameArray[i+j];
                            gameArray[i+j+1]=newGameArray[i+j+1];
                        }
                        else{
                            return newGameArray
                        }
                    }
                    else{
                        return newGameArray
                    }
                }
                return newGameArray
            }
            
        }
        var adjacentElement = this.getNeighbourElement(gameArray, i-1);
        if(this.density>adjacentElement.density){
            for(var j=0; j<this.dispersionRate; j++){
                var adjacentElement = this.getNeighbourElement(gameArray, i-j-1);
                if(updatedPositions.indexOf(i-j-1)==-1 && i%canvasData.width!=0 && this.density>adjacentElement.density){
                    var belowElement = this.getNeighbourElement(gameArray, i+canvasData.width+1)
                    if(this.density<=belowElement.density){
                        this.swapPositions(newGameArray, gameArray, updatedPositions, i-j, i-j-1)
                        gameArray[i-j]=newGameArray[i-j];
                        gameArray[i-j-1]=newGameArray[i-j-1];
                    }
                    else{
                        return newGameArray
                    }
                }
                else{
                    return newGameArray
                }
            }
            return newGameArray
        }
        return newGameArray
            
    }
}

export {Water}