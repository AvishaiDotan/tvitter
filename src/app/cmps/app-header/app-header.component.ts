import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from '../../service/user.service';
import { User } from 'src/app/models';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit, OnDestroy {
    user?: User | null;
    userSubscription!: Subscription

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.userSubscription = this.userService.user$.subscribe((user) => (this.user = user));
    }

    logout() {
        this.userService.logout();
    }

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe()
    }
}
