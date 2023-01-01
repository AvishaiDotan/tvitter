import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';

import { Tweet } from '../../models';
import { TwitterService } from '../../service/twitter.service';

@Component({
  selector: 'tweet-details',
  templateUrl: './tweet-details.component.html',
  styleUrls: ['./tweet-details.component.scss']
})
export class TweetDetailsComponent implements OnInit {

  constructor(
    private twitterService: TwitterService,
    private route: ActivatedRoute
  ) {}

  tweetId!: string
  tweet: Tweet | undefined

  async ngOnInit(): Promise<void> {
    const tweedId = this.route.snapshot.params['id']
    this.tweetId = tweedId

    this.route.params.subscribe(params => {
      this.tweetId = params['id']
      this.loadTweet()
    })
  }

  async loadTweet() {
    const tweet = await lastValueFrom(this.twitterService.getById(this.tweetId))
    this.tweet = tweet
  }
}
