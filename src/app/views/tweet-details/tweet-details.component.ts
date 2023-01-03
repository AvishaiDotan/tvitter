import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';

import { Tweet } from '../../models';
import { TwitterService } from '../../service/twitter.service';

@Component({
    selector: 'tweet-details',
    templateUrl: './tweet-details.component.html',
    styleUrls: ['./tweet-details.component.scss'],
})
export class TweetDetailsComponent implements OnInit, OnDestroy {
    tweet: Tweet | undefined;
    tweetReplies: Tweet[] = []
    subscription!: Subscription;

    constructor(
        private twitterService: TwitterService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    async ngOnInit(): Promise<void> {
        this.subscription = this.route.data.subscribe((data) => {
            this.tweet = data['tweet'];
            this.tweetReplies = this.twitterService.getTweetReplies(this.tweet!._id);
        });
    }
    
    addTweet(tweet: Tweet) {
        this.tweetReplies.push(tweet)
        console.log('replies:', this.tweetReplies);
    }

    async handleLike(tweet: Tweet) {
        await lastValueFrom(this.twitterService.toggleLike(tweet._id))
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    goBack() {
        this.router.navigate(['/']);
    }
}
