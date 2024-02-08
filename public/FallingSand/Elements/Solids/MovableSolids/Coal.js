import { MovableSolid } from "./MovableSolid.js";

class Coal extends MovableSolid{
    density = 1346;
    acidResistance=0.7;
    terminalVelocity=9;
    inertialResistance=0.9;
    colour=0x2B2B2E;
    flammability=0.9;

}

export{Coal};