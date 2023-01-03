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

    constructor(
        private userService: UserService,
        private router: Router,
        public TwitterService: TwitterService
    ) {}

    ngOnInit(): void {
        this.userSubscription = this.userService.user$.subscribe((user) => (this.user = user));
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['/home'])
    }

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe()
    }

    onGoHomePage() {
        this.TwitterService.setFilter({term: ''})
        this.router.navigate(['/']);
    }

    toggleSearchModal() {
        this.TwitterService.toggleAdvancedSearchModal()
    }

    
}
