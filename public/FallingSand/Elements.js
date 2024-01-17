import { getElement } from "./ElementColourMap.js";

class Element{
    density=0;
    move(i, gameArray, canvasData, newGameArray, updatedPositions){
        return newGameArray;
    }
}

class Empty extends Element{
    density=0;
}

class Sand extends Element{
    density = 1631;
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
                    newGameArray[i]=gameArray[i+canvasData.width1];
                    newGameArray[i+canvasData.width-1]=gameArray[i];
                    updatedPositions.push(i+canvasData.width+1)
                    return newGameArray
                }
            }
        }
        return newGameArray;
    }
}

class Water extends Element{
    density=1000;
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
                    newGameArray[i]=gameArray[i+canvasData.width1];
                    newGameArray[i+canvasData.width-1]=gameArray[i];
                    updatedPositions.push(i+canvasData.width+1)
                    return newGameArray
                }
            }
        }
        dir=Math.random() < 0.5;
        if(dir){
            if(updatedPositions.indexOf(i-1)==-1 && i%canvasData.width!=0){
                var neighbourColour=gameArray[i-1]
                neighbourColour&=0x00ffffff;
                var neighbourElement=getElement(neighbourColour);
                if(this.density>neighbourElement.density){
                    newGameArray[i]=gameArray[i-1];
                    newGameArray[i-1]=gameArray[i];
                    updatedPositions.push(i-1)
                    return newGameArray
                }
            }
        }
        if(updatedPositions.indexOf(i+1)==-1 && i%canvasData.width!=canvasData.width-1){
            var neighbourColour=gameArray[i+1]
            neighbourColour&=0x00ffffff;
            var neighbourElement=getElement(neighbourColour);
            if(this.density>neighbourElement.density){
                newGameArray[i]=gameArray[i+1];
                newGameArray[i+1]=gameArray[i];
                updatedPositions.push(i+1)
                return newGameArray
            }
        }
        return newGameArray;
    }
}

class Stone extends Element{
    density=Infinity
}

export{Sand, Water, Stone, Empty}