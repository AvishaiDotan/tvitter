import { Component } from '@angular/core';

import { TweetFilter } from '../../models';
import { TwitterService } from '../../service/twitter.service';

@Component({
    selector: 'tweet-filter-search',
    templateUrl: './tweet-filter-search.component.html',
    styleUrls: ['./tweet-filter-search.component.scss'],
})
export class TweetFilterSearchComponent {
    constructor(public TwitterService: TwitterService) {}

    handleSubmit(filterBy: TweetFilter) {
        const { term } = filterBy
        this.TwitterService.setFilter({ term })
    }
}
