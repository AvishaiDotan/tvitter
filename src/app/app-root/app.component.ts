import { Component, OnDestroy, OnInit } from '@angular/core';
import { TwitterService } from '../service/twitter.service';
import { UserService } from '../service/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    constructor(
        private userService: UserService,
        private twitterService: TwitterService
    ) {}

    isOpenedAdvancedSearchModal = false

    ngOnInit(): void {
        this.userService.loadUser()
        this.twitterService.startBackgroundService()
    }

    ngOnDestroy(): void {
        this.twitterService.stopBackgroundService()
    }
}
