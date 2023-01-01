import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TweetFilter } from 'src/app/models/tweet.model';
import { TwitterService } from 'src/app/service/twitter.service';

@Component({
    selector: 'tweet-filter',
    templateUrl: './tweet-filter.component.html',
    styleUrls: ['./tweet-filter.component.scss']
})
export class TweetFilterComponent implements OnInit, OnDestroy {

    constructor(private twitterService: TwitterService) { }

    subscription!: Subscription
    tweetFilter!: TweetFilter

    ngOnInit(): void {
        this.subscription = this.twitterService.tweetFilter$.subscribe(tweetFilter => {
            this.tweetFilter = tweetFilter
        })
    }

    onSetFilter() {
        this.twitterService.setFilter({ ...this.tweetFilter })
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }
}
