import {Commander} from "./Commander";
import {Stat} from "./Stat";

export class Minotaur extends Commander {
    constructor() {
        super(new Stat(1200, 10, 30, 10, 10));
    }

    toString() {
        return "tidus";
    }

    use(command, target) {
        super.use(command, target);
    }

    undo(){
        super.undo();
    }

    redo(){
        super.redo();
    }
}