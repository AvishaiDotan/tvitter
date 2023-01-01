import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tweet, TweetFilter, User } from '../models/tweet.model';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { tweetsDB } from './tweetsDB'



@Injectable({
    providedIn: 'root'
})
export class TwitterService {

    constructor(private http: HttpClient) { }
    private _tweetsDb: Tweet[] = tweetsDB
    private _UsersDb!: User[]


    private _tweets$ = new BehaviorSubject<Tweet[]>([]);
    public tweets$ = this._tweets$.asObservable()

    private _tweetFilter$ = new BehaviorSubject<TweetFilter>({ term: '' });
    public tweetFilter$ = this._tweetFilter$.asObservable()

    public query() {
        const filterBy = this._tweetFilter$.value

        const tweets = this._tweetsDb.filter(({ text }) => {
            return text.toLowerCase().includes(filterBy.term.toLowerCase());
        });
        this._tweets$.next(tweets);
    }

    public getEmptyTweet(): object {
        return {
            text: '',
            username: '',
            replies: [],
            likes: [],
        }
    }

    public remove(tweetId: string) {
        const tweets = this._tweetsDb
        const tweetIdx = tweets.findIndex(tweet => tweet._id === tweetId)
        tweets.splice(tweetIdx, 1)
        this._tweets$.next(tweets);
        return of({})
    }

    public getById(tweetId: string): Observable<Tweet> {
        const tweet = this._tweetsDb.find(tweet => tweet._id === tweetId)
        return tweet ? of({ ...tweet }) : of()
    }

    public save(tweet: Tweet) {
        return tweet._id ? this._edit(tweet) : this._add(tweet)
    }

    public setFilter(tweetFilter: TweetFilter) {
        this._tweetFilter$.next(tweetFilter)
        this.query()
    }

    private _add(tweet: Tweet) {
        tweet._id = this._makeId()
        this._tweetsDb.push(tweet)
        this._tweets$.next(this._tweetsDb)
        return of(tweet)
    }

    private _edit(tweet: Tweet) {
        const tweets = this._tweetsDb
        const tweetIdx = tweets.findIndex(_tweet => _tweet._id === tweet._id)
        tweets.splice(tweetIdx, 1, tweet)
        this._tweets$.next(tweets)
        return of(tweet)
    }

    private _makeId(length = 5) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}
