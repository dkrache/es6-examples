export class Command {

    constructor() {
        if (this.constructor === Command) {
            throw new Error("Cannot instantiate Command");
        }
    }

    execute() {
        throw new Error("Implements execute")
    }

    undo() {
        throw new Error("Implements undo")
    }

    redo() {
        throw new Error("Implements undo")
    }

    toString() {
        throw new Error("Implements undo")
    }
}