import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounce } from 'lodash';

import { TweetFilter } from '../../models';
import { TwitterService } from '../../service/twitter.service';

@Component({
    selector: 'tweet-filter-search',
    templateUrl: './tweet-filter-search.component.html',
    styleUrls: ['./tweet-filter-search.component.scss']
})
export class TweetFilterSearchComponent implements OnInit, OnDestroy {
    
    constructor(public TwitterService: TwitterService) { }

    filterBy!: TweetFilter
    subscription!: Subscription
    handleSearchChange!: () => void


    ngOnInit(): void {
        this.subscription = this.TwitterService.tweetFilter$.subscribe(filterBy => {
            this.filterBy = filterBy
        })

        this.handleSearchChange = debounce(this.doChangeFilter, 500)
    }

    doChangeFilter() {
        this.TwitterService.setFilter({ ...this.filterBy })
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }

    
}
