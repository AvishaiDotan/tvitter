import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.userService.loadUser()
    }
}
