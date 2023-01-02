import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tweet, TweetFilter } from '../models';
import { BehaviorSubject, Observable, of, lastValueFrom } from 'rxjs';
import { tweetsDB } from './tweetsDB';

@Injectable({
    providedIn: 'root',
})
export class TwitterService {
    constructor(private http: HttpClient) {}
    private _tweetsDb: Tweet[] = tweetsDB;

    private _tweets$ = new BehaviorSubject<Tweet[]>([]);
    public tweets$ = this._tweets$.asObservable();

    private _tweetFilter$ = new BehaviorSubject<TweetFilter>({ term: '' });
    public tweetFilter$ = this._tweetFilter$.asObservable();

    public query() {
        const filterBy = this._tweetFilter$.value;

        const tweets = this._tweetsDb.filter(({ text, belongsTo }) => {
            return !belongsTo && text.toLowerCase().includes(filterBy.term.toLowerCase());
        });
        this._tweets$.next(tweets);
    }

    public getAllTweets(): Tweet[] {
        return [...this._tweetsDb];
    }

    public getTweetReplies(tweetId: string): Tweet[] {
        return this.getAllTweets().filter((({ belongsTo }) => belongsTo === tweetId));
    }

    public getEmptyTweet(): object {
        return {
            text: '',
            username: '',
            replies: [],
            likes: [],
            createdAt: Date.now()
        };
    }

    public remove(tweetId: string) {
        const tweets = this._tweetsDb;
        const tweetIdx = tweets.findIndex((tweet) => tweet._id === tweetId);
        tweets.splice(tweetIdx, 1);
        this._tweets$.next(tweets);
        return of({});
    }

    public getById(tweetId: string): Observable<Tweet> {
        let tweet = this._tweetsDb.find(tweet => tweet._id === tweetId)
        return tweet ? of({ ...tweet }) : of();
    }

    public save(tweet: Tweet) {
        return tweet._id ? this._edit(tweet) : this._add(tweet);
    }

    public async saveAsReply(tweetId: string, newTweet: Tweet) {
        const originalTweet = this._tweetsDb.find( tweet => tweet._id === tweetId)
        if(originalTweet) {
            newTweet.belongsTo = tweetId
            const { _id } = await lastValueFrom(this._add(newTweet))
            originalTweet.replies.unshift(_id)
            return lastValueFrom(this._edit(originalTweet))
        }
        return Promise.resolve(null)
    }

    public setFilter(tweetFilter: TweetFilter) {
        this._tweetFilter$.next(tweetFilter);
        this.query();
    }

    private _add(tweet: Tweet) {
        tweet = {
            ...this.getEmptyTweet(),
            ...tweet,
            _id: this._makeId(),
            createdAt: Date.now()
        } as Tweet

        this._tweetsDb.unshift(tweet);
        this._tweets$.next(this._tweetsDb);
        return of(tweet);
    }

    private _edit(tweet: Tweet) {
        const tweets = this._tweetsDb;
        const tweetIdx = tweets.findIndex((_tweet) => _tweet._id === tweet._id);
        tweets.splice(tweetIdx, 1, tweet);
        this._tweets$.next(tweets);
        return of(tweet);
    }

    private _makeId(length = 5) {
        var text = '';
        var possible =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++) {
            text += possible.charAt(
                Math.floor(Math.random() * possible.length)
            );
        }
        return text;
    }

    public printDemo() {
        console.log(this._tweetsDb);
    }
}
