import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from '../../service/user.service';
import { User } from 'src/app/models';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnDestroy, OnInit {
    user!: User;
    userSubscription!: Subscription

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.userSubscription = this.userService.user$.subscribe((user) => (this.user = user!));
    }

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe()
    }
}
