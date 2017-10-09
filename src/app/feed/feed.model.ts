export class Feed {
    public name: string;
    public email: string;
    public address: string;
    public done: boolean;

    static clone(feed: Feed): Feed {
        return new Feed(feed.name, feed.email, feed.address, feed.done);
    }

    constructor(name: string, email: string, address: string, done = false) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.done = done;
    }

    clear() {
        this.name = '';
        this.email = '';
        this.address = '';
        this.done = false;
    }
}
