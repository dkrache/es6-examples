import {Target} from "./Target";

export class Commander extends Target {
    constructor(stat) {
        super(stat);
        if (this.constructor === Commander) {
            throw new Error("Cannot instantiate class Commander");
        }
        this.undoStack = [];
        this.redoStack = [];

    }

    use(command, target) {
        console.log(`"${this} use ${command} at ${target}"`);
        command.execute(this, target);
        this.undoStack.push(command);
        this.redoStack = [];
    }

    undo() {
        let command = this.undoStack.pop();
        if (command) {
            this.redoStack.push(command);
            command.undo();
        }
    }

    redo() {
        let command = this.redoStack.pop();
        if (command) {
            this.undoStack.push(command);
            command.redo();
        }
    }
}