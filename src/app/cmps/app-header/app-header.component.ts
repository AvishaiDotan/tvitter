import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';
import { UserService } from 'src/app/service/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
    user?: User | null;

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.userService.user$.subscribe((user) => (this.user = user));
    }

    logout() {
        this.userService.logout();
    }
}
