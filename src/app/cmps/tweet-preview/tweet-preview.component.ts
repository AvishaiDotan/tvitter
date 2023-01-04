import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from 'src/app/models/tweet.model';
import { TwitterService } from 'src/app/service/twitter.service';
import { UserService } from 'src/app/service/user.service';

@Component({
    selector: 'tweet-preview',
    templateUrl: './tweet-preview.component.html',
    styleUrls: ['./tweet-preview.component.scss']
})
export class TweetPreviewComponent implements OnInit {

    constructor(
        private twitterService: TwitterService,
        private userService: UserService
    ) {}

    @Input() tweet!: Tweet

    belongsToTweet$!: Observable<Tweet>

    is_animating: boolean = false;

    ngOnInit(): void {
        if (this.tweet.belongsTo) {
            this.belongsToTweet$ = this.twitterService.getById(this.tweet.belongsTo)
        }
    }

    getDatePipe(timestamp: number): string {
        if (Date.now() - timestamp < 60000) return 'ss'
        if (Date.now() - timestamp < 3600000) return 'mm'
        return 'LLL d'
    }

    get isLiked() {
        const user = this.userService.loggedInUser
        return user && this.tweet.likes.some(({ _id }) => _id === user._id)
    }

    get likesCount() {
        return this.tweet.likes.length + this.tweet.fakeLikes!
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

    get gender() {
        const num = +this.tweet.user._id
        return (num % 2 === 0) ? 'Male' : 'Female'
    }
}
