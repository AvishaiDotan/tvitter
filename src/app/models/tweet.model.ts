export interface Tweet {
    _id: string;
    text: string;
    username: string;
    createdAt: number;
    replies: Tweet[];
    likes: User[];
}

export interface User {
    _id: string;
    username: string;
}

export interface TweetFilter {
    term: string;
}


