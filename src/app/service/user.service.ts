import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { User } from '../models/user.model';

interface UserFilter {
  username?: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _usersDb!: User[]

  constructor(private http: HttpClient) { }

  private _users$ = new BehaviorSubject<User[]>([]);
  public users$ = this._users$.asObservable()

  private _usersFilter$ = new BehaviorSubject<UserFilter>({ username: '' });
  public usersFilter$ = this._usersFilter$.asObservable()

  public query() {
    let users = this._usersDb
    const username = this._usersFilter$.value?.username
    if (username) {
      const regex = new RegExp(username, 'i')
      users = users.filter(({ username }) => regex.test(username))
    }

    this._users$.next(users);
  }

  public setFilter(userFilter: UserFilter) {
    this._usersFilter$.next(userFilter)
    this.query()
  }

  public getEmptyUser() {
    return {
      _id: '',
      username: ''
    }
  }

  public remove(userId: string) {
    const users = this._usersDb
    const tweetIdx = users.findIndex(user => user._id === userId)
    users.splice(tweetIdx, 1)
    this._users$.next(users);
    return of({})
  }

  public getById(userId: string): Observable<User> {
    const user = this._usersDb.find(user => user._id === userId)
    return user ? of({ ...user }) : of()
  }

  public save(user: User) {
    return user._id ? this._edit(user) : this._add(user)
  }

  private _add(user: User) {
    user._id = this._makeId()
    this._usersDb.push(user)
    this._users$.next(this._usersDb)
    return of(user)
  }

  private _edit(user: User) {
    const users = this._usersDb
    const userIdx = users.findIndex(_user => _user._id === user._id)
    users.splice(userIdx, 1, user)
    this._users$.next(users)
    return of(user)
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