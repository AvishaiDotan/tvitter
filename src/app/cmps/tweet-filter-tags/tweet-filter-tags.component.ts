import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Tweet, TweetFilter } from 'src/app/models';
import { TwitterService } from 'src/app/service/twitter.service';

@Component({
    selector: 'tweet-filter-tags',
    templateUrl: './tweet-filter-tags.component.html',
    styleUrls: ['./tweet-filter-tags.component.scss']
})
export class TweetFilterTagsComponent implements OnInit, OnDestroy {
    constructor(private twitterService: TwitterService) { }

    filterBy!: TweetFilter
    filterSubscription!: Subscription
    tags: [string, number][] = []

    tweets!: Tweet[]

    ngOnInit(): void {
        this.filterSubscription = this.twitterService.tweetFilter$.subscribe(filterBy => {
            this.filterBy = filterBy
        })

        this.tweets = this.twitterService.getAllTweets()
        this.tags = this.getTags()
    }

    ngOnDestroy(): void {
        this.filterSubscription.unsubscribe()
    }

    setFilter(tag: string): void {
        this.filterBy.term = tag
        this.twitterService.setFilter({ ...this.filterBy })
    }

    getTags() {
        const hashtags = this.tweets.reduce((accumulator: { [key: string]: number }, tweet) => {
            const tweetHashtags = extractHashtags(tweet.text);
            tweetHashtags.forEach(hashtag => {
                if (accumulator[hashtag]) {
                    accumulator[hashtag] += 1 * Math.random()
                } else {
                    accumulator[hashtag] = 1;
                }

                accumulator[hashtag] = +accumulator[hashtag].toFixed(2)

            });


            return accumulator
        }, {});

        const hashtagsArray = Object.entries(hashtags);
        hashtagsArray.sort((a, b) => b[1] - a[1]);
        const res = hashtagsArray.slice(0, 10)


        return res //res.map(([hashtag]) => hashtag);


        function extractHashtags(text: string): string[] {
            const hashtags: string[] = [];
            const words = text.split(' ');

            for (const word of words) {
                if (word.startsWith('#')) {
                    hashtags.push(word.slice(1));
                }
            }

            return hashtags;
        }
    }



}


