export const tweetsDB = [
    {
        _id: '1',
        tweetImgUrl: 'https://pbs.twimg.com/media/123456789876543210.jpg',
        text: 'Hello, world!',
        user: {
            _id: '1',
            username: 'johnsmith',
            avatarUrl:
                'https://pbs.twimg.com/profile_images/123456789876543210/abcdefg.jpg',
        },
        createdAt: 1614681412000,
        replies: ['2'],
        likes: [
            {
                _id: '2',
                username: 'janesmith',
                avatarUrl:
                    'https://pbs.twimg.com/profile_images/098765432112345678/hijklmn.jpg',
            },
        ],
    },
    {
        _id: '2',
        text: 'This is a tweet',
        user: {
            _id: '1',
            username: 'johnsmith',
            avatarUrl:
                'https://pbs.twimg.com/profile_images/123456789876543210/abcdefg.jpg',
        },
        createdAt: 1614681412000,
        replies: [],
        likes: [
            {
                _id: '2',
                username: 'janesmith',
                avatarUrl:
                    'https://pbs.twimg.com/profile_images/098765432112345678/hijklmn.jpg',
            },
        ],
    },
    {
        _id: '3',
        tweetImgUrl: 'https://pbs.twimg.com/media/098765432123456789.jpg',
        text: 'This is another tweet',
        user: {
            _id: '2',
            username: 'janesmith',
            avatarUrl:
                'https://pbs.twimg.com/profile_images/098765432112345678/hijklmn.jpg',
        },
        createdAt: 1614681412000,
        replies: ['1'],
        likes: [
            {
                _id: '1',
                username: 'johnsmith',
                avatarUrl:
                    'https://pbs.twimg.com/profile_images/123456789876543210/abcdefg.jpg',
            },
        ],
    },
    {
        _id: '4',
        username: 'john_doe',
        avatarUrl: 'https://example.com/avatars/john_doe.png',
        text: "I'm loving TypeScript so far!",
        user: {
            _id: '4',
            username: 'john_doe',
            avatarUrl: 'https://example.com/avatars/john_doe.png',
        },
        createdAt: 162345987,
        replies: ['5', '6'],
        likes: [
            {
                _id: '7',
                username: 'jane_doe',
                avatarUrl: 'https://example.com/avatars/jane_doe.png',
            },
            {
                _id: '8',
                username: 'bob_smith',
                avatarUrl: 'https://example.com/avatars/bob_smith.png',
            },
        ],
    },
    {
        _id: '5',
        username: 'jane_doe',
        avatarUrl: 'https://example.com/avatars/jane_doe.png',
        text: 'TypeScript is a great addition to any project!',
        user: {
            _id: '5',
            username: 'jane_doe',
            avatarUrl: 'https://example.com/avatars/jane_doe.png',
        },
        createdAt: 162345989,
        replies: ['7'],
        likes: [
            {
                _id: '8',
                username: 'bob_smith',
                avatarUrl: 'https://example.com/avatars/bob_smith.png',
            },
        ],
    },
    {
        _id: '6',
        username: 'bob_smith',
        avatarUrl: 'https://example.com/avatars/bob_smith.png',
        text: "I'm glad to hear that!",
        user: {
            _id: '6',
            username: 'bob_smith',
            avatarUrl: 'https://example.com/avatars/bob_smith.png',
        },
        createdAt: 162346987,
        replies: [],
        likes: [
            {
                _id: '7',
                username: 'jane_doe',
                avatarUrl: 'https://example.com/avatars/jane_doe.png',
            },
        ],
    },
    {
        _id: '8',
        username: 'bob_smith',
        avatarUrl: 'https://example.com/avatars/bob_smith.png',
        text: "I'm a big fan of TypeScript!",
        user: {
            _id: '8',
            username: 'bob_smith',
            avatarUrl: 'https://example.com/avatars/bob_smith.png',
        },
        createdAt: 162345987,
        replies: ['9'],
        likes: [
            {
                _id: '10',
                username: 'jane_doe',
                avatarUrl: 'https://example.com/avatars/jane_doe.png',
            },
            {
                _id: '11',
                username: 'john_doe',
                avatarUrl: 'https://example.com/avatars/john_doe.png',
            },
        ],
    },
    {
        _id: '9',
        username: 'jane_doe',
        avatarUrl: 'https://example.com/avatars/jane_doe.png',
        tweetImgUrl: 'https://example.com/tweet_images/9.png',
        text: 'I agree, TypeScript has really helped me catch bugs before they happen!',
        user: {
            _id: '9',
            username: 'jane_doe',
            avatarUrl: 'https://example.com/avatars/jane_doe.png',
        },
        createdAt: 162345989,
        replies: ['11'],
        likes: [
            {
                _id: '10',
                username: 'jane_doe',
                avatarUrl: 'https://example.com/avatars/jane_doe.png',
            },
        ],
    },
    {
        _id: '10',
        username: 'jane_doe',
        avatarUrl: 'https://example.com/avatars/jane_doe.png',
        text: 'TypeScript is definitely worth learning!',
        user: {
            _id: '10',
            username: 'jane_doe',
            avatarUrl: 'https://example.com/avatars/jane_doe.png',
        },
        createdAt: 162346987,
        replies: [],
        likes: [
            {
                _id: '11',
                username: 'john_doe',
                avatarUrl: 'https://example.com/avatars/john_doe.png',
            },
        ],
    },
    {
        _id: '11',
        username: 'john_doe',
        avatarUrl: 'https://example.com/avatars/john_doe.png',
        tweetImgUrl: 'https://example.com/tweet_images/11.png',
        text: 'TypeScript has really improved my workflow!',
        user: {
            _id: '11',
            username: 'john_doe',
            avatarUrl: 'https://example.com/avatars/john_doe.png',
        },
        createdAt: 162345987,
        replies: ['12'],
        likes: [
            {
                _id: '13',
                username: 'jane_doe',
                avatarUrl: 'https://example.com/avatars/jane_doe.png',
            },
            {
                _id: '14',
                username: 'bob_smith',
                avatarUrl: 'https://example.com/avatars/bob_smith.png',
            },
        ],
    },
    {
        _id: '12',
        username: 'jane_doe',
        avatarUrl: 'https://example.com/avatars/jane_doe.png',
        text: 'I completely agree! TypeScript has saved me so much time and effort.',
        user: {
            _id: '12',
            username: 'jane_doe',
            avatarUrl: 'https://example.com/avatars/jane_doe.png',
        },
        createdAt: 162345989,
        replies: ['14'],
        likes: [
            {
                _id: '13',
                username: 'jane_doe',
                avatarUrl: 'https://example.com/avatars/jane_doe.png',
            },
        ],
    },
    {
        _id: '13',
        username: 'jane_doe',
        avatarUrl: 'https://example.com/avatars/jane_doe.png',
        text: 'TypeScript is a game-changer!',
        user: {
            _id: '13',
            username: 'jane_doe',
            avatarUrl: 'https://example.com/avatars/jane_doe.png',
        },
        createdAt: 162346987,
        replies: [],
        likes: [
            {
                _id: '14',
                username: 'bob_smith',
                avatarUrl: 'https://example.com/avatars/bob_smith.png',
            },
        ],
    },
    {
        _id: '14',
        tweetImgUrl: 'https://example.com/tweet_images/14.png',
        text: 'TypeScript is my go-to for any project!',
        user: {
            _id: '14',
            username: 'bob_smith',
            avatarUrl: 'https://example.com/avatars/bob_smith.png',
        },
        createdAt: 162345987,
        replies: ['15', '16'],
        likes: [
            {
                _id: '17',
                username: 'jane_doe',
                avatarUrl: 'https://example.com/avatars/jane_doe.png',
            },
            {
                _id: '18',
                username: 'john_doe',
                avatarUrl: 'https://example.com/avatars/john_doe.png',
            },
        ],
    },
    {
        _id: '15',
        tweetImgUrl: 'https://example.com/tweet_images/15.png',
        text: 'TypeScript has made my code so much more reliable!',
        user: {
            _id: '15',
            username: 'jane_doe',
            avatarUrl: 'https://example.com/avatars/jane_doe.png',
        },
        createdAt: 162345989,
        replies: ['17'],
        likes: [
            {
                _id: '18',
                username: 'john_doe',
                avatarUrl: 'https://example.com/avatars/john_doe.png',
            },
        ],
    },
];
