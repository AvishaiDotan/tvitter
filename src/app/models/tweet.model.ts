import { User } from './user.model'

export interface Tweet {
    _id: string;
    text: string;
    username: string;
    createdAt: number;
    replies: Tweet[];
    likes: User[];
}

export interface TweetFilter {
    term: string;
}