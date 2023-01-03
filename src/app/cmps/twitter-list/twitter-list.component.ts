import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tweet } from 'src/app/models/tweet.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'twitter-list',
  templateUrl: './twitter-list.component.html',
  styleUrls: ['./twitter-list.component.scss']
})
export class TwitterListComponent {
  @Input() tweets!: Tweet[] | null
  @Output() onLike = new EventEmitter<Tweet>()

  constructor(private userService: UserService) {}

  get user() {
    return this.userService.loggedInUser
  }
}
