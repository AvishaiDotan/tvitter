import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounce } from 'lodash';
import { Subscription } from 'rxjs';
import { Tweet, TweetFilter } from 'src/app/models';
import { TwitterService } from 'src/app/service/twitter.service';

@Component({
    selector: 'tweet-filter-tags',
    templateUrl: './tweet-filter-tags.component.html',
    styleUrls: ['./tweet-filter-tags.component.scss']
})
export class TweetFilterTagsComponent implements OnInit, OnDestroy {
    constructor(private TwitterService: TwitterService) { }

    filterBy!: TweetFilter
    filterSubscription!: Subscription

    tweets!: Tweet[]


    handleSearchChange: any = (): void => {
        this.TwitterService.setFilter({ ...this.filterBy })
    }

    ngOnInit(): void {
        this.filterSubscription = this.TwitterService.tweetFilter$.subscribe(filterBy => {
            this.filterBy = filterBy
        })

        this.tweets = this.TwitterService.getAllTweets()

        this.handleSearchChange = debounce(this.handleSearchChange, 500)
    }

    ngOnDestroy(): void {
        this.filterSubscription.unsubscribe()
    }

    setFilter(tag: string): void {
        this.filterBy.term = tag
        this.TwitterService.setFilter({ ...this.filterBy })
    }

    get tags() {
        const hashtags = this.tweets.reduce((accumulator: { [key: string]: number }, tweet) => {
            const tweetHashtags = extractHashtags(tweet.text);
            tweetHashtags.forEach(hashtag => {
                if (accumulator[hashtag]) {
                    accumulator[hashtag] += 1;
                } else {
                    accumulator[hashtag] = 1;
                }
            });
            return accumulator;
        }, {});

        const hashtagsArray = Object.entries(hashtags);
        hashtagsArray.sort((a, b) => b[1] - a[1]);
        const res = hashtagsArray.slice(0, 10).map(([hashtag]) => hashtag);
        return res


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


