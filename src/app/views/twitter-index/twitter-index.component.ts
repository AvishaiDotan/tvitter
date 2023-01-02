import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from 'src/app/models/tweet.model';
import { TwitterService } from 'src/app/service/twitter.service';

@Component({
    selector: 'twitter-index',
    templateUrl: './twitter-index.component.html',
    styleUrls: ['./twitter-index.component.scss'],
})
export class TwitterIndexComponent implements OnInit {
    constructor(private twitterService: TwitterService) {}

    tweets!: Tweet[];
    tweets$!: Observable<Tweet[]>;
    selectedTweetId: string = '';
    

    ngOnInit(): void {
        this.twitterService.query();
        this.tweets$ = this.twitterService.tweets$;
    }


}
