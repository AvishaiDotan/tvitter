import { Component, Input } from '@angular/core';
import { TweetFilter } from 'src/app/models/tweet.model';
import { TwitterService } from 'src/app/service/twitter.service';

@Component({
    selector: 'tweet-filter-search',
    templateUrl: './tweet-filter-search.component.html',
    styleUrls: ['./tweet-filter-search.component.scss']
})
export class TweetFilterSearchComponent {

    constructor(private twitterService: TwitterService) { }

    @Input() tweetFilter!: TweetFilter[]
    filterToEdit = {term: ''}

    onSetFilter() {
        this.twitterService.setFilter({ ...this.filterToEdit })
    }
}
