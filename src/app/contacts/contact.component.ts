import { Component } from '@angular/core';

import { Contact } from './contact.model';

@Component({
    moduleId: module.id,
    selector: 'as-contactlist',
    templateUrl: 'contact.html',

})
export class ContactlistComponent {

    data: Contact;
    title: string;
    hidden: Boolean;
    isValid: Boolean;
    showNext: Boolean;
    showPrev: Boolean;
    isCompleted: Boolean;

    public contact: Contact;
    private list: Contact[];
    private showCompleted: Boolean;

    constructor() {
        this.showCompleted = true;
        this.contact = new Contact('Add me to list!', 'pal@gmail.com', '100 harbour boulevard', false);
        this.list = [
            new Contact('jane doe', 'pal@gmail.com', '100 harbour boulevard'),
            new Contact('john doe', 'pal@gmail.com', '100 harbour boulevard', true)
        ];
        this.data = new Contact('Add me to list!', 'pal@gmail.com', '100 harbour boulevard', false);
        this.title = 'Feed Wizard';
        this.isCompleted = false;
    }

    addContact() {
        this.list = this.list.concat(Contact.clone(this.contact));
        this.contact.clear();
    }

    delContact(contactIndex: number) {
        this.list = this.list.filter(
            (contact, index) => index !== contactIndex);
    }

    onStep1Next(event) {
      console.log('step next ');
    }

    onStep2Next(event) {
      console.log('step next ');
    }

    onStep3Next(event) {
      console.log('step next ');
    }

    onComplete(event) {
      console.log('step next ');
    }
}
