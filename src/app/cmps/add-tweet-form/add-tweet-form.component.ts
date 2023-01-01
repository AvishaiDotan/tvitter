import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { Tweet } from '../../models/tweet.model';

@Component({
  selector: 'add-tweet-form',
  templateUrl: './add-tweet-form.component.html',
  styleUrls: ['./add-tweet-form.component.scss']
})
export class AddTweetFormComponent {
  profileForm = this.formBuilder.group({
    text: ['What\'s happening', [Validators.required, Validators.minLength(3)]]
  });
  @Output() onSubmit = new EventEmitter<Tweet>();

  constructor(private formBuilder: FormBuilder) {}

  handleSubmit() {
     const { text } = this.profileForm.value
     const tweet: Tweet = {
      text,
      username: 'Test user',
     } as Tweet
     this.onSubmit.emit(tweet!)
  }
}
