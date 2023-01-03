import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tweet } from 'src/app/models/tweet.model';

@Component({
  selector: 'twitter-list',
  templateUrl: './twitter-list.component.html',
  styleUrls: ['./twitter-list.component.scss']
})
export class TwitterListComponent {
  @Input() tweets!: Tweet[] | null
  @Output() onLike = new EventEmitter<Tweet>()
}
