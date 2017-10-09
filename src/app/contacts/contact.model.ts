export class Contact {
    public name: string;
    public email: string;
    public address: string;
    public done: boolean;

    static clone(contact: Contact): Contact {
        return new Contact(contact.name, contact.email, contact.address, contact.done);
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
