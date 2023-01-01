import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { TwitterService } from 'src/app/service/twitter.service';

import { Tweet } from '../../models/tweet.model';

@Component({
  selector: 'add-tweet-form',
  templateUrl: './add-tweet-form.component.html',
  styleUrls: ['./add-tweet-form.component.scss']
})
export class AddTweetFormComponent {
  profileForm = this.formBuilder.group({
    text: ['', [Validators.required, Validators.minLength(3)]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private twitterService: TwitterService
  ) {}

  handleSubmit() {
     const { text } = this.profileForm.value
     const tweet: Tweet = {
      text,
      username: 'Test user',
     } as Tweet

     this.twitterService.save(tweet)
     this.profileForm.reset()
  }
}
