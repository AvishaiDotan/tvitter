import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Tweet } from 'src/app/models/tweet.model';
import { TwitterService } from 'src/app/service/twitter.service';

@Component({
  selector: 'tweet-details',
  templateUrl: './tweet-details.component.html',
  styleUrls: ['./tweet-details.component.scss']
})
export class TweetDetailsComponent implements OnInit {

  constructor(private twitterService: TwitterService){}

  @Input() tweetId!: string
  tweet: Tweet | undefined

  async ngOnInit(): Promise<void> {
    const tweet = await lastValueFrom(this.twitterService.getById(this.tweetId))
    this.tweet = tweet    
  }

}
