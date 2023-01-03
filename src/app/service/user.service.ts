import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

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
        return this._user$.value
    }

    public loadUser() {
        const user = loadFromStorage(STORAGE_KEY);
        if (user) this._user$.next(user);
    }

    public signup(username: string) {
        const user: User = {
            _id: this._makeNumId(2),
            username,
            avatarUrl: 'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo.png'
        };

        this._user$.next(user);
        saveToStorage(STORAGE_KEY, user);
        return of({ ...user });
    }

    public logout() {
        localStorage.removeItem(STORAGE_KEY);
        this._user$.next(null);
    }

    private _makeNumId(length = 5) {
        var text = '';
        var possible =
            '0123456789';
        for (var i = 0; i < length; i++) {
            text += possible.charAt(
                Math.floor(Math.random() * possible.length)
            );
        }
        return text;
    }
    private _makeId(length = 5) {
        var text = '';
        var possible =
            '123456789';
        for (var i = 0; i < length; i++) {
            text += possible.charAt(
                Math.floor(Math.random() * possible.length)
            );
        }
        return text;
    }
}
