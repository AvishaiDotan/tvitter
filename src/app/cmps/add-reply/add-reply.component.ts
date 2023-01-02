import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tweet } from 'src/app/models';

@Component({
  selector: 'add-reply',
  templateUrl: './add-reply.component.html',
  styleUrls: ['./add-reply.component.scss']
})
export class AddReplyComponent {

  @Input() tweet!: Tweet
  @Output() onTweetSaved = new EventEmitter<Tweet>()

}
