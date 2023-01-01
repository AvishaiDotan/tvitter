import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tweet } from 'src/app/models/tweet.model';
import {TwitterService} from '../../service/twitter.service'

@Component({
    selector: 'tweet-preview',
    templateUrl: './tweet-preview.component.html',
    styleUrls: ['./tweet-preview.component.scss']
})
export class TweetPreviewComponent {
    @Input() tweet!: Tweet
    @Output() onSelect = new EventEmitter<string>()

    onSelectTweetId() {
        this.onSelect.emit(this.tweet._id)
        console.log('selected tweet', this.tweet._id);
    }
}