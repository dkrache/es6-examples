import {Squall} from "./character/Squall";
import {Minotaur} from "./character/Minotaur";
import {Attack} from "./command/Attack";
import {FireSpell} from "./command/FireSpell";

let squall = new Squall();
let minotaur = new Minotaur();

console.log(minotaur);
squall.use(new Attack(), minotaur);
console.log(minotaur);
squall.use(new FireSpell(), minotaur);
console.log(minotaur);
squall.undo();
console.log(minotaur);
squall.undo();
console.log(minotaur);
squall.redo();
console.log(minotaur);
squall.redo();
console.log(minotaur);
