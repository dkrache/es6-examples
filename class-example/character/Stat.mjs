export class Stat {
    constructor(vitality, attack, defense, magic, blockRate) {
        this.vitality = vitality;
        this.attack = attack;
        this.defense  = defense;
        this.magic = magic;
        this.blockRate = blockRate;
    }

    get getVitality() {
        return this.vitality;
    }

    set setVitality(vitality) {
        this.vitality = vitality;
    }

    get getAttack() {
        return this.attack;
    }

    get getDefense () {
        return this.defense ;
    }

    get getMagic() {
        return this.magic;
    }

    get getBlockRate() {
        return this.blockRate;
    }
}