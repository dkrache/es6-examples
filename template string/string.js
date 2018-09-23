var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

var dog = {
    name: "bobby",
    toString(){return this.name;},
    setName(name) {this.name = name}
};

console.log(`Fine, is it your dog ${dog}`);
dog.setName("poppy");
console.log(`oh no, it's not mine and it's ${dog}`);
