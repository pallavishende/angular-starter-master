import { Component } from '@angular/core';

import { Support } from './support.model';

@Component({
    moduleId: module.id,
    selector: 'as-supportlist',
    templateUrl: 'supportlist.html'
})
export class SupportlistComponent {
    public support: Support;
    private list: Support[];
    private showCompleted: Boolean;

    constructor() {
        this.showCompleted = true;
        this.support = new Support('Add new support contact', false);
        this.list = [
            new Support('jane doe'),
            new Support('john doe', true)
        ];
    }

    addSupport() {
        this.list = this.list.concat(Support.clone(this.support));
        this.support.clear();
    }

    delSupport(supportIndex: number) {
        this.list = this.list.filter(
            (support, index) => index !== supportIndex);
    }
}
