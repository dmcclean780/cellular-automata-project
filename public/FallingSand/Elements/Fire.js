import { Element } from "./Elements.js";
import { getElementByName } from "../nameElementMap.js";
import { Liquid } from "./Liquids/Liquid.js";
import { Oil } from "./Liquids/Oil.js";

class Fire extends Element{
    colour=0x008CFF;
    move(i, gameArray, canvasData, newGameArray, updatedPosition){
        var fireLife = this.getAlpha(gameArray, i);
        for(var j=-1; j<2; j++){
            for(var k=-1; k<2; k++){
                var nextIndex=i+(canvasData.width*j+k);
                if(nextIndex != i && nextIndex>0 && nextIndex<canvasData.width*canvasData.height && nextIndex%canvasData.width!=0 && nextIndex%canvasData.width!=canvasData.width-1){
                    var neighbour = this.getNeighbourElement(gameArray, nextIndex)
                    var spreadFire = Math.random()*1000
                    if(spreadFire>neighbour.fireResistance){
                        newGameArray=this.spreadFire(newGameArray, nextIndex, neighbour)
                    }
                    if(neighbour instanceof Liquid && !(neighbour instanceof Oil) && updatedPosition.includes(nextIndex)==false){
                        var evaporate=Math.random()>0.3;
                        if(evaporate){
                            newGameArray=this.changeStateToGas(neighbour, newGameArray, nextIndex);
                        }
                        else{
                            newGameArray[i]=0x00000000
                        }
                       
                        updatedPosition.push(nextIndex);
                    }
                }
            }
            var fireDecrease=Math.random()*1000>950
            if(fireDecrease){
                fireLife--
            }
            if(fireLife==0){
                newGameArray[i]=0x00000000;
            }
            newGameArray=this.updateAlphaByte(newGameArray, fireLife, i);
        }
        return newGameArray;
    }

    changeStateToGas(neighbour, newGameArray, nextIndex){
        var gasState=getElementByName(neighbour.gasState);
        var alpha = Math.floor(Math.random() * 15+206);
        var colour= gasState.colour | (alpha<<24);
        newGameArray[nextIndex]=colour;
        return newGameArray
    }

    spreadFire(newGameArray, nextIndex, neighbour){
        var alpha = Math.floor(Math.random() * 15+206);
        var colour = this.colour | (alpha<<24);
        colour = colour | (neighbour.burnTime<<24);
        newGameArray[nextIndex]=colour;
        return newGameArray;
    }
}

export{Fire};