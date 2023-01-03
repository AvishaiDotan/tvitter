import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from '../../service/user.service';
import { TwitterService } from '../../service/twitter.service';
import { User } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit, OnDestroy {
    user?: User | null;
    userSubscription!: Subscription
    tweetsSubscription!: Subscription
    isMoreAvailable: boolean = false

    constructor(
        private userService: UserService,
        private router: Router,
        public twitterService: TwitterService
    ) {}

    ngOnInit(): void {
        this.userSubscription = this.userService.user$.subscribe((user) => (this.user = user));
        this.tweetsSubscription = this.twitterService.tweets$.subscribe(() => this.isMoreAvailable = true)
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['/home'])
    }

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe()
        this.tweetsSubscription.unsubscribe()
    }

    onGoHomePage() {
        this.twitterService.setFilter({term: ''})
        this.router.navigate(['/']);
        this.isMoreAvailable = false
    }

    toggleSearchModal() {
        this.twitterService.toggleAdvancedSearchModal()
    }


}
