import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { User } from 'src/app/models';
import { TwitterService } from 'src/app/service/twitter.service';
import { UserService } from 'src/app/service/user.service';

import { Tweet } from '../../models/tweet.model';

@Component({
    selector: 'add-tweet-form',
    templateUrl: './add-tweet-form.component.html',
    styleUrls: ['./add-tweet-form.component.scss']
})
export class AddTweetFormComponent implements OnInit {

    @Input() placeholderText: string = ''
    @Input() tweetId: string = ''
    @Output() tweetSaved = new EventEmitter<Tweet>()

    profileForm = this.formBuilder.group({
        text: ['', [Validators.required, Validators.minLength(3)]]
    })

    user!: User | null

    constructor(
        private formBuilder: FormBuilder,
        private twitterService: TwitterService,
        private userService: UserService
    ) { }

    async handleSubmit() {
        const { text } = this.profileForm.value
        let tweet: Tweet = {
            text,
            user: this.userService.loggedInUser
        } as Tweet

        if (this.tweetId) tweet = (await this.twitterService.saveAsReply(this.tweetId, tweet)) as Tweet
        else tweet = await lastValueFrom(this.twitterService.save(tweet))

        this.tweetSaved.emit(tweet)
        this.profileForm.reset()
    }

    ngOnInit() {
        this.user = this.userService.loggedInUser
    }
}
