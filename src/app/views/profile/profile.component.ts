import { Component, OnDestroy, OnInit } from '@angular/core';
import { lastValueFrom, Subscription } from 'rxjs';

import { UserService } from '../../service/user.service';
import { TwitterService } from '../../service/twitter.service';
import { Tweet, User } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnDestroy, OnInit {
    user!: User;
    userSubscription!: Subscription;
    tweets: Tweet[] = [];
    bcgImg: string = ''

    constructor(
        private userService: UserService,
        private twitterService: TwitterService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.userSubscription = this.userService.user$.subscribe(
            (user) => {
                (this.user = user!)
                this.bcgImg = `background-image: url(https://picsum.photos/id/${this.user._id}/400/200)`
            }
        );

        this.tweets = this.twitterService.getAllTweets()
            .filter(tweet => tweet.user._id === this.user._id)
    }

    async handleLike(tweet: Tweet) {
        await lastValueFrom(this.twitterService.toggleLike(tweet._id))
    }

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe();
    }

    goBack() {
        this.router.navigate(['/']);
    }
}
