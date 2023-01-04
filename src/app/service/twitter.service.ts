import { Injectable, OnDestroy } from '@angular/core';
import { Tweet, TweetFilter, User } from '../models';
import { BehaviorSubject, Observable, of, lastValueFrom, Subscription } from 'rxjs';

import { loadFromStorage, saveToStorage, makeId, getRandomIntInclusive } from './util.service'
import { tweetsDB } from './tweetsDB';
import { tweetTxtDB } from './tweetTxtDB';
import { UserService } from './user.service';

const STORAGE_KEY = 'tweetsDB'
function loadTweets() {
    let tweets = loadFromStorage(STORAGE_KEY)
    if (!tweets) {
        tweets = (tweetsDB as Tweet[]).map(tweet => {
            tweet.fakeLikes = getRandomIntInclusive(58, 597)
            return tweet
        })
        saveToStorage(STORAGE_KEY, tweets)
    }
    return tweets
}

@Injectable({
    providedIn: 'root',
})
export class TwitterService implements OnDestroy {
    serviceInterval: number = 0
    tweetsSubscription!: Subscription

    constructor(private userService: UserService) {
        this.tweetsSubscription = this._tweets$.subscribe(tweets => saveToStorage(STORAGE_KEY, tweets))
    }

    ngOnDestroy(): void {
        this.tweetsSubscription.unsubscribe()
    }

    private _tweetsDb: Tweet[] = loadTweets();

    private _isAdvancedSearchModal$ = new BehaviorSubject<boolean>(false);
    public isAdvancedSearchModal$ = this._isAdvancedSearchModal$.asObservable();

    private _isAddTweetModal$ = new BehaviorSubject<boolean>(false);
    public isAddTweetModal$ = this._isAddTweetModal$.asObservable();

    private _tweets$ = new BehaviorSubject<Tweet[]>(this._tweetsDb);
    public tweets$ = this._tweets$.asObservable();

    private _tweetFilter$ = new BehaviorSubject<TweetFilter>({ term: '' });
    public tweetFilter$ = this._tweetFilter$.asObservable();

    public query() {
        const filterBy = this._tweetFilter$.value;
        const tweets = this._tweetsDb
            .filter(({ text, belongsTo }) => {
                return !belongsTo && text.toLowerCase().includes(filterBy.term.toLowerCase());
            })

        this._tweets$.next(tweets);
    }

    public advancedQuery(filter: {term: string, hashtag: string, account: string}): void {
        const tweets = this._tweetsDb.filter((tweet) => {
            const isFromAccount = tweet.user.username.toLowerCase().includes(filter.account.replace('@', '').toLowerCase())
            const isContainHashtag = tweet.text.toLowerCase().includes(filter.hashtag.toLowerCase())
            const isContainTerm = tweet.text.toLowerCase().includes(filter.term.toLowerCase())

            return (isFromAccount && isContainHashtag && isContainTerm)
        });
        this._tweets$.next(tweets);
    }

    public getAllTweets(): Tweet[] {
        return [...this._tweetsDb];
    }

    public getTweetReplies(tweetId: string): Tweet[] {
        return this.getAllTweets().filter((({ belongsTo }) => belongsTo === tweetId));
    }

    public getEmptyTweet() {
        return {
            text: '',
            replies: [],
            likes: [],
            createdAt: Date.now()
        };
    }

    public toggleLike(tweetId: string): Observable<Tweet> {
        const tweet = this._tweetsDb.find(({ _id }) => _id === tweetId)
        let user = this.userService.loggedInUser!

        if (tweet) {
            const likeIdx = tweet.likes.findIndex(({ _id }) => _id === user._id)
            const isLike = likeIdx >= 0
            if (isLike) tweet.likes.splice(likeIdx, 1)
            else tweet.likes.push(user)
        }

        return tweet ? this._edit(tweet) : of()
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
        const originalTweet = this._tweetsDb.find(tweet => tweet._id === tweetId)
        if(originalTweet) {
            const savedReply = await lastValueFrom(this._add(newTweet, tweetId))
            originalTweet.replies.unshift(savedReply._id)
            await lastValueFrom(this._edit(originalTweet))
            return savedReply
        }
        return Promise.resolve(null)
    }

    public setFilter(tweetFilter: TweetFilter) {
        this._tweetFilter$.next(tweetFilter);
        this.query();
    }

    private _add(tweet: Tweet, belongsTo?: string) {
        tweet = this._createTweet(tweet.text, tweet.user)
        if (belongsTo) tweet.belongsTo = belongsTo
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

    public startBackgroundService() {
        this.serviceInterval = window.setInterval(() => {
            this._addNewTweets()
        }, 30000)
    }

    public stopBackgroundService() {
        clearInterval(this.serviceInterval)
    }

    private _createTweet(text: string, user: User): Tweet {
        return {
            ...this.getEmptyTweet(),
            text,
            user,
            _id: makeId(),
            createdAt: Date.now()
        }
    }

    public toggleAdvancedSearchModal() {
        this._isAdvancedSearchModal$.next(!this._isAdvancedSearchModal$.getValue())
    }

    public toggleAddTweetModal() {
        this._isAddTweetModal$.next(!this._isAddTweetModal$.getValue())
    }

    private _getRandomText() {
        const rndIdx = getRandomIntInclusive(0, tweetTxtDB.length - 1)
        return tweetTxtDB[rndIdx].txt
    }

    private _addNewTweets() {
        const rndTweetCount = getRandomIntInclusive(1, 5)
        const newTweets: Tweet[] = []
        for (let i = 0; i < rndTweetCount; i++) {
            const user = this.userService.getRandomUser()
            const rndText = this._getRandomText()
            const tweet = this._createTweet(rndText, user)
            tweet.fakeLikes = getRandomIntInclusive(15, 59)
            newTweets.push()
        }
        const allTweets = [...newTweets, ...this._tweets$.value]
        this._tweetsDb = [...this._tweetsDb, ...allTweets]
        this._tweets$.next(allTweets)
    }
}
