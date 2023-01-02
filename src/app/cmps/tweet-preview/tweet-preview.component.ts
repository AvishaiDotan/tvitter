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

    isImageShown(): boolean {
        return (+this.tweet._id % 3 === 0)
    }

}