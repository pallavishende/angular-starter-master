import { Component } from '@angular/core';

import { Feed } from './feed.model';

@Component({
    moduleId: module.id,
    selector: 'as-feedlist',
    templateUrl: 'feed.html',

})
export class FeedlistComponent {

    data: Feed;
    title: string;
    hidden: Boolean;
    isValid: Boolean;
    showNext: Boolean;
    showPrev: Boolean;
    isCompleted: Boolean;

    public feed: Feed;
    private list: Feed[];
    private showCompleted: Boolean;

    constructor() {
        this.showCompleted = true;
        this.feed = new Feed('Add me to list!', 'pal@gmail.com', '100 harbour boulevard', false);
        this.list = [
            new Feed('jane doe', 'pal@gmail.com', '100 harbour boulevard'),
            new Feed('john doe', 'pal@gmail.com', '100 harbour boulevard', true)
        ];
        this.data = new Feed('Add me to list!', 'pal@gmail.com', '100 harbour boulevard', false);
        this.title = 'Feed Wizard';
        this.isCompleted = false;
    }

    addFeed() {
        this.list = this.list.concat(Feed.clone(this.feed));
        this.feed.clear();
    }

    delFeed(feedIndex: number) {
        this.list = this.list.filter(
            (feed, index) => index !== feedIndex);
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
