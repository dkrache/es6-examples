function sum(a=1, b=1, c=1, ...e) {
    if(!e || e.length===0){
        return a+b+c;
    }
    return a+b+c+sum(...e);
}
console.log(sum(...[1,2,3,4,5,6,7])); // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 1 + 1
console.log(sum()); // 1 + 1 + 1
