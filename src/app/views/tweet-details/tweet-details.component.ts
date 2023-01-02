import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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
    constructor(
        private twitterService: TwitterService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    tweetId!: string;
    tweet: Tweet | undefined;

    subscription!: Subscription;

    async ngOnInit(): Promise<void> {
      
        this.subscription = this.route.data.subscribe((data) => {
            this.tweet = data['tweet'];
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

   
}
