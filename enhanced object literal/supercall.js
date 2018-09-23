class Animal {
    toString() {
        return "animal"
    }
}

var name = "catty";

var cat = {
    __proto__: new Animal(),
    name,
    toString() {
        // Super calls
        return "cat " + super.toString();
    },
    [ 'compute_' + (() => "lifeSense")() ] : () => 42
};

console.log(cat.toString());
console.log(cat.name);
console.log(cat['compute_lifeSense']());