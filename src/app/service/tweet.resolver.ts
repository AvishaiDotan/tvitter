import { Injectable } from '@angular/core';
import {
    Router,
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { Tweet } from '../models';
import { TwitterService } from './twitter.service';

@Injectable({
    providedIn: 'root',
})
export class TweetResolver implements Resolve<Tweet> {
    constructor(private twitterService: TwitterService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Tweet> {
        const tweetId = route.params['id']
        return this.twitterService.getById(tweetId)
    }
}
