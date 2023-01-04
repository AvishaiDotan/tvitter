import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

import { makeId, getRandomIntInclusive, loadFromStorage, saveToStorage } from './util.service'
import { userDB } from './userDB';
import { User } from '../models';

const STORAGE_KEY = 'loggedInUser';

@Injectable({ providedIn: 'root' })
export class UserService {
    private _user$ = new BehaviorSubject<User | null>(null);
    public user$ = this._user$.asObservable();

    get loggedInUser() {
        return this._user$.value;
    }

    public loadUser() {
        let user = loadFromStorage(STORAGE_KEY);
        if (!user) {
            user = this.logUserAsGuest();
            saveToStorage(STORAGE_KEY, user);
        }
        this._user$.next(user);
    }

    public signup(username: string) {
        const user: User = {
            _id: makeId(2),
            username,
            avatarUrl:
                'https://cdn.lorem.space/images/face/.cache/150x150/austin-wade-X6Uj51n5CE8-unsplash.jpg',
        };

        this._user$.next(user);
        saveToStorage(STORAGE_KEY, user);
        return of({ ...user });
    }

    public logout() {
        localStorage.removeItem(STORAGE_KEY);
        this._user$.next(null);
    }

    public getRandomUser() {
        const maxRnd = userDB.length;
        const rndUserIdx = getRandomIntInclusive(0, maxRnd - 1);
        return { ...userDB[rndUserIdx] };
    }

    private logUserAsGuest() {
        return {
            _id: makeId(2),
            username: 'Guest',
            avatarUrl:
                'https://cdn.lorem.space/images/face/.cache/150x150/jurica-koletic-7YVZYZeITc8-unsplash.jpg',
        };
    }
}
