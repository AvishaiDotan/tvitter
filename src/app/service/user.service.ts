import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { userDB } from './userDB';

import { User } from '../models';

function saveToStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
}

function loadFromStorage(key: string) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : undefined;
}

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
            _id: this._makeNumId(2),
            username,
            avatarUrl:
                'https://api.lorem.space/image/face?w=150&h=150&hash=4F32C4CF',
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
        const rndUserIdx = getRandomIntInclusive(0, maxRnd - 1)
        return { ...userDB[rndUserIdx] }
    }

    private _makeNumId(length = 5) {
        var text = '';
        var possible = '0123456789';
        for (var i = 0; i < length; i++) {
            text += possible.charAt(
                Math.floor(Math.random() * possible.length)
            );
        }
        return text;
    }

    private logUserAsGuest() {
        return {
            _id: this._makeNumId(2),
            username: 'Guest',
            avatarUrl:
                'https://api.lorem.space/image/face?w=150&h=150&hash=225E6693',
        };
    }
}

export function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}
