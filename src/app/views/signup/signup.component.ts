import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
    username: string = ''

    constructor(
        private userService: UserService,
        private router: Router
    ) {}

    async handleSubmit() {
        console.log('this.username = ' + this.username);
        await lastValueFrom(this.userService.signup(this.username))
        this.router.navigate(['/home'])
    }
}
