import {Command} from "./Command";

export class Attack extends Command {

    constructor() {
        super();
        this.target = undefined;
        this.oldHitPoint = undefined;
    }

    execute(commander, target){
        this.target = target;
        this.oldHitPoint=this.target.stat.vitality;
        var damage = commander.stat.attack+10;
        damage = Math.max(damage,1);
        this.target.stat.vitality = this.target.stat.vitality-damage;
    }

    undo() {
        if (this.target != null) {
            var temp = this.target.stat.vitality;
            this.target.stat.vitality = this.oldHitPoint;
            this.oldHitPoint = temp;
        }
    }

    redo() {
        this.undo();
    }

    toString() {
        return "attack";
    }
}

