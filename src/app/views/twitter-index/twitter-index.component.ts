import { Component, OnDestroy, OnInit } from '@angular/core';
import { lastValueFrom, map, Subscription } from 'rxjs';

import { Tweet } from 'src/app/models/tweet.model';
import { TwitterService } from 'src/app/service/twitter.service';

@Component({
    selector: 'twitter-index',
    templateUrl: './twitter-index.component.html',
    styleUrls: ['./twitter-index.component.scss'],
})
export class TwitterIndexComponent implements OnInit, OnDestroy {
    constructor(
        private twitterService: TwitterService
    ) { }

    tweets: Tweet[] = [];
    tweetsCount: number = 0;
    tweetsCountSub!: Subscription
    tweetsIntervalId: any

    ngOnInit(): void {
        this.loadTweets()

        this.tweetsCountSub = this.twitterService.tweets$
            .pipe(map(tweets => tweets.slice(this.tweets.length).length))
            .subscribe(count => this.tweetsCount = count)

        this.tweetsIntervalId = setInterval(() => {
            this.twitterService.addNewTweets()
        }, 5000)
    }

    loadTweets(): void {
        this.twitterService.query();
        this.twitterService.tweets$
            .subscribe(tweets => this.tweets = tweets)
            .unsubscribe();
    }


    async handleLike(tweet: Tweet) {
        await lastValueFrom(this.twitterService.toggleLike(tweet._id))
    }

    scroll(el: HTMLElement) {
        el.scrollIntoView({ behavior: 'smooth' });
    }

    showMore() {
        this.twitterService.setFilter({ skip: this.tweets.length, term: '' })
        this.loadTweets()
    }

    ngOnDestroy(): void {
        this.twitterService.setFilter({ skip: 0, term: '' }) // clear filter
        clearInterval(this.tweetsIntervalId)
        this.tweetsCountSub.unsubscribe()
    }
}
