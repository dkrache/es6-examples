// list matching
var [a=5,b=5,c=5] = [10,20,undefined];
console.log(`a=10 - ${a}`);
console.log(`b=20 - ${b}`);
console.log(`c=5 - ${c}`);
// object matching
var { op: a, lhs: { op: b }, rhs: c } = {op:5, lhs:{op:2}, rhs: 7};
console.log(`a=5 - ${a}`);
console.log(`b=2 - ${b}`);
console.log(`c=7 - ${c}`);
// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope
var {op, lhs, rhs} = {lhs:2,op:1, rhs:3};
console.log(`op=1 - ${op}`);
console.log(`lhs=2 - ${lhs}`);
console.log(`rhs=3 - ${rhs}`);
// Can be used in parameter position
function g({name: x}) {
    console.log(x);
}
g({name: 5});

