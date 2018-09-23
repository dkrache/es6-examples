function sum(a=1, b=1, c=1, ...e) {
    if(!e || e.length===0){
        return a+b+c;
    }
    return a+b+c+sum(...e);
}
console.log(sum(...[1,2,3,4,5,6,7])); // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 1 + 1
console.log(sum()); // 1 + 1 + 1

var squall = {name: 'Squall', power:7};
var minotaur = {name: 'Minotaur'};

var attack = function(target, damage){
    console.log(`${this.name} use attack : ${damage * this.power} on ${target.name} `);

};
var defend = function(){
    console.log(`${this.name} defends`);
};

attack.call(squall, minotaur, 10);
defend.call(squall, minotaur);
attack.apply(squall, [minotaur, 10]);
defend.apply(minotaur);