import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Tweet } from 'src/app/models';

@Component({
    selector: 'add-reply',
    templateUrl: './add-reply.component.html',
    styleUrls: ['./add-reply.component.scss']
})
export class AddReplyComponent {

    @Input() tweet!: Tweet
    @Output() onTweetSaved = new EventEmitter<Tweet>()


    constructor(private router: Router) { }

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

}
