var evens = [0,2,4,6,8,10];
var fives = [];
var odds = evens.map(v => v + 1);
console.log(`odds : ${odds}`);
var nums = evens.map((value, index) => value + index);
console.log(`nums : ${nums}`);
var pairs = evens.map(v => ({even: v, odd: v + 1}));
console.log(`pairs : `);
console.log(pairs);

// Statement bodies
nums.forEach(v => {
    if (v % 5 === 0)
        fives.push(v);
});
console.log(`fives : ${fives}`);

// Lexical this
var bob = {
    _name: "Bob",
    _friends: ["Sara", "Alfred"],
    printFriends() {
        this._friends.forEach(f =>
            console.log(this._name + " knows " + f));
    }
}

bob.printFriends();