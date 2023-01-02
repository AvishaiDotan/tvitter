import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tweet } from 'src/app/models/tweet.model';

@Component({
    selector: 'tweet-preview',
    templateUrl: './tweet-preview.component.html',
    styleUrls: ['./tweet-preview.component.scss']
})
export class TweetPreviewComponent {

    @Input() tweet!: Tweet
    @Output() like = new EventEmitter<Tweet>()

    likeClick(event: MouseEvent) {
        event.stopPropagation()
        this.like.emit(this.tweet)
    }
}
