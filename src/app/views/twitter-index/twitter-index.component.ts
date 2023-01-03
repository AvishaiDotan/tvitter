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
    tweetsToShow: number = 0;
    tweetsCountSub!: Subscription
    tweetsFilterSub!: Subscription

    ngOnInit(): void {
        this.loadTweets()

        this.tweetsCountSub = this.twitterService.tweets$
            .pipe(map(tweets => tweets.length - this.tweets.length))
            .subscribe(count => this.tweetsToShow = count)

        this.tweetsFilterSub = this.twitterService.tweetFilter$.subscribe(() => this.loadTweets())
    }

    addTweet(tweet: Tweet) {
        this.tweets.unshift(tweet)
        this.tweetsToShow -= 1
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
        this.loadTweets()
        this.tweetsToShow = 0
    }

    ngOnDestroy(): void {
        this.tweetsCountSub.unsubscribe()
        this.tweetsFilterSub.unsubscribe()
    }
}
