import { User } from './user.model'

export interface Tweet {
    _id: string;
    belongsTo?: string;
    tweetImgUrl?: string;
    text: string;
    user: User;
    createdAt: number;
    replies: string[]; // list of tweetIds
    likes: User[];
    fakeLikes?: number;
}

export interface TweetFilter {
    term: string;
}
