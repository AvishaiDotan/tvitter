import { Injectable } from '@angular/core';
import { Tweet } from '../models';
import { tweetsDB } from './tweetsDB';

@Injectable({
    providedIn: 'root',
})
export class AsyncLocalStorageService {
    constructor() {}
    private _tweetsDb: Tweet[] = tweetsDB;

    async query(entityType: string, delay = 500): Promise<any> {
        const entities = localStorage.getItem(entityType)
        if (entities) {
            return new Promise((res) =>
                setTimeout(() => res(JSON.parse(entities)), delay)
            );
        } else {
          return new Promise((res) =>
                setTimeout(() => res(this._tweetsDb), delay)
            );
        }
    }

    async get(entityType: string, entityId: string): Promise<any> {
        return this.query(entityType).then((entities) => {
            const entity = entities.find(
                (entity: any) => entity.id === entityId
            );
            if (!entity) throw new Error(`Unknown Entity ${entityId}`);
            return entity;
        });
    }

    async post(
        entityType: string,
        newEntity: any,
        append = true
    ): Promise<any> {
        localStorage.setItem(entityType, JSON.stringify(newEntity));
        newEntity._id = this._makeId();
        return this.query(entityType).then((entities) => {
            append ? entities.push(newEntity) : entities.unshift(newEntity);
            this._save(entityType, entities);
            return newEntity;
        });
    }

    // async put(entityType: string, value: any): Promise<void> {
    //   localStorage.setItem(entityType, JSON.stringify(value));
    // }

    async put(entityType: string, updatedEntity: any) {
        return this.query(entityType).then((entities) => {
            const idx = entities.findIndex(
                (entity: any) => entity.id === updatedEntity.id
            );
            entities.splice(idx, 1, updatedEntity);
            this._save(entityType, entities);
            return updatedEntity;
        });
    }

    async remove(entityType: string, entityId: string) {
        return this.query(entityType).then((entities) => {
            const idx = entities.findIndex(
                (entity: any) => entity.id === entityId
            );
            if (idx < 0) throw new Error(`Unknown Entity ${entityId}`);
            entities.splice(idx, 1);
            this._save(entityType, entities);
        });
    }

    // Private functions

    private _save(entityType: string, entities: any) {
        localStorage.setItem(entityType, JSON.stringify(entities));
    }

    private createDefaultTweets() {

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
