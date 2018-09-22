import {Stat} from "./Stat";

export class Target {

    constructor(stat){
        if (this.constructor === Target) {
            throw new Error("Can't instantiate Target class!");
        }
        if(!stat instanceof Stat){
            throw new Error(`Stat class expected ${stat.className}`);
        }
        this.stat = stat;
    }

    get getStat(){
        return this.stat;
    }
}
Target.prototype.toString = ()=>{
    throw new Error("Abstract method");
};