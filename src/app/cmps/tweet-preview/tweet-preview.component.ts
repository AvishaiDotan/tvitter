import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Tweet } from 'src/app/models/tweet.model';

@Component({
    selector: 'tweet-preview',
    templateUrl: './tweet-preview.component.html',
    styleUrls: ['./tweet-preview.component.scss']
})
export class TweetPreviewComponent{

    constructor(private router: Router) {}

    @Input() tweet!: Tweet

    is_animating: boolean = false;
    isLiked: boolean = false;

    getDatePipe(timestamp: number): string {
        if (Date.now() - timestamp < 60000) return 'ss'
        if (Date.now() - timestamp < 3600000) return 'mm'
        return 'LLL d'
    }



    @Output() like = new EventEmitter<Tweet>()

    likeClick(event: MouseEvent) {
        event.stopPropagation()
        this.like.emit(this.tweet)
        this.is_animating = !this.is_animating
    }

    get formattedTweetText() {
        const strsArray =  this.tweet.text.split(" ")
        return strsArray.map((str) => {
            return (str.includes('#') ? `<span class="spany">${str}</span>` : str )
        }).join(' ')
    }
}
