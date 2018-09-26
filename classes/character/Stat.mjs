export class Stat {
    constructor(vitality, attack, defense, magic, blockRate) {
        this._vitality = vitality,
        this._attack = attack;
        this._defense = defense;
        this._magic = magic;
        this._blockRate = blockRate;
    }

    get vitality() {
        console.log("fuuuck");
        return this._attack;
    }
    get attack() {
        console.log("fuuuck");
        return this._attack;
    }
    get defense() {
        console.log("fuuuck");
        return this._defense;
    }
    get magic() {
        console.log("fuuuck");
        return this._magic;
    }
    get blockRate() {
        console.log("fuuuck");
        return this._blockRate;
    }


}