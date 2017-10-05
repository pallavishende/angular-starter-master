export class Support {
    public name: string;
    public done: boolean;

    static clone(support: Support): Support {
        return new Support(support.name, support.done);
    }

    constructor(name: string, done = false) {
        this.name = name;
        this.done = done;
    }

    clear() {
        this.name = '';
        this.done = false;
    }
}
