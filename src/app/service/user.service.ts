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

    public loadUser() {
        const user = loadFromStorage(STORAGE_KEY);
        if (user) this._user$.next(user);
    }

    public signup(username: string) {
        const user: User = {
            _id: this._makeId(),
            username,
        };

        this._user$.next(user);
        saveToStorage(STORAGE_KEY, user);
        return of({ ...user });
    }

    public logout() {
        localStorage.removeItem(STORAGE_KEY);
        this._user$.next(null);
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
}
