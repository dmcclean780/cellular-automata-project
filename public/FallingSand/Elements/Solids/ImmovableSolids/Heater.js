
import { Water } from "../../Liquids/Water.js";
import {ImmovableSoild} from "./ImmovableSolid.js"

class Heater extends ImmovableSoild{
    move(i, gameArray, canvasData, newGameArray, updatedPosition){
        for(var j=-1; j<2; j++){
            for(var k=-1; k<2; k++){
                var nextIndex=i+(canvasData.width*j+k);
                if(nextIndex != i && nextIndex>0 && nextIndex<canvasData.width*canvasData.height && nextIndex%canvasData.width!=0 && nextIndex%canvasData.width!=canvasData.width-1){
                    var neighbour = this.getNeighbourElement(gameArray, nextIndex)
                    if(neighbour instanceof Water && updatedPosition.includes(nextIndex)==false){
                        var alpha = Math.floor(Math.random() * 15+206);
                        var colour= 0x00E6D8AD | (alpha<<24);
                        newGameArray[nextIndex]=colour;
                        updatedPosition.push(nextIndex);
                    }
                }
            }
        }
        return newGameArray;
    }
}

export {Heater};