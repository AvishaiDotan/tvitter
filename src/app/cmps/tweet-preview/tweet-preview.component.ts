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

    getDatePipe(timestamp: number): string {
        if (Date.now() - timestamp < 60000) return 'ss'
        if (Date.now() - timestamp < 3600000) return'mm'
        return 'LLL d'
    }

    
}