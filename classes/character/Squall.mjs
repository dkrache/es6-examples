import {Commander} from "./Commander";
import {Stat} from "./Stat";

export class Squall extends Commander {
    constructor() {
        super(new Stat(100, 25, 20, 100, 0));
    }

    toString() {
        return "tidus";
    }

    use(command, target) {
        super.use(command, target);
    }

    undo() {
        super.undo();
    }

    redo() {
        super.redo();
    }
}