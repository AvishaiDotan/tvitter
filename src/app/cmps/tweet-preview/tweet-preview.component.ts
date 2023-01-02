import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tweet } from 'src/app/models/tweet.model';

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

    
    @Output() like = new EventEmitter<Tweet>()

    likeClick(event: MouseEvent) {
        event.stopPropagation()
        this.like.emit(this.tweet)
    }
}
