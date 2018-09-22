export class Attack extends Command {

    constructor() {
        super();
        this.target = undefined;
        this.oldHitPoint = undefined;
    }

    execute(commander, target){
        this.target = target;

        this.oldHitPoint=this.target.getStat().getVitality();
        var damage = target.getStat().getDefense() - commander.getStat().getAttack()+10;
        damage = Math.max(damage,1);
        this.target.getStat().setVitality(this.oldHitPoint-damage);

    }

    undo() {
        if (this.target != null) {
            var temp = this.target.getStat().getVitality()
            this.target.getStat().setVitality(this.oldHitPoint);
            this.oldHitPoint = temp;
        }
    }

    redo() {
        undo();
    }

    toString() {
        return "fire spell";
    }
}

