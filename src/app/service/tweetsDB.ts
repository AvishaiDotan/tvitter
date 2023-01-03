export const tweetsDB = [
    {
        _id: 'a1b2c3d4',
        tweetImgUrl: 'https://picsum.photos/id/{{tweet._id}}/400/200',
        text: 'Just finished an awesome game of football with my friends! #football',
        user: {
            _id: '1',
            username: 'jane',
            avatarUrl:
            'https://cdn.lorem.space/images/face/.cache/150x150/michael-dam-mEZ3PoFGs_k-unsplash.jpg',
        },
        createdAt: 1605343051000,
        replies: ['i9j0k1l2', 'm3n4o5p6'],
        likes: [
            {
                _id: 'q7r8s9t0',
                username: 'johnDoe',
                avatarUrl: 'https://pbs.twimg.com/media/DtHxuHlUwAE7R_b.jpg',
            },
            {
                _id: 'u1v2w3x4',
                username: 'sarahSmith',
                avatarUrl: 'https://pbs.twimg.com/media/DtHxuHlUwAE7R_b.jpg',
            },
        ],
    },

    {
        _id: '1',
        tweetImgUrl: 'https://pbs.twimg.com/media/123456789876543210.jpg',
        text: 'Just tried the best sushi in town! #foodie #sushi',
        user: {
            _id: '2',
            username: 'john',
            avatarUrl:
            'https://cdn.lorem.space/images/face/.cache/150x150/julian-wan-WNoLnJo7tS8-unsplash.jpg',
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
        text: 'So excited to be going on a road trip through the west coast! #travels #roadtrip',
        user: {
            _id: '1',
            username: 'johnsmith',
            avatarUrl:
            'https://cdn.lorem.space/images/face/.cache/150x150/meysam-jarahkar-l4gz33evF9k-unsplash.jpg',
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
        text: "Obsessed with this new yoga class I'm taking. #wellness #yoga",
        user: {
            _id: '3',
            username: 'sarah',
            avatarUrl:
            'https://cdn.lorem.space/images/face/.cache/150x150/manny-moreno-Jm1CwCoYxkM-unsplash.jpg',
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
        text: "Who's ready for the big game tonight?! #football #sport",
        user: {
            _id: '4',
            username: 'mike',
            avatarUrl:
            'https://cdn.lorem.space/images/face/.cache/150x150/meysam-jarahkar-l4gz33evF9k-unsplash.jpg',
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
        text: 'Had the best time exploring the city on my bike today. #cycling #adventure',
        user: {
            _id: '5',
            username: 'lisa',
            avatarUrl:
            'https://cdn.lorem.space/images/face/.cache/150x150/pexels-th-team-9640282.jpg',
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
        text: "Thrilled to announce that I'll be running my first marathon next month! #fitness #running",
        user: {
            _id: '6',
            username: 'alex',
            avatarUrl:
            'https://cdn.lorem.space/images/face/.cache/150x150/michael-weir-A_cNlkZc5mw-unsplash.jpg',
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
        text: "Just finished my latest painting and I'm loving how it turned out. #art #creativity",
        user: {
            _id: '7',
            username: 'samuel',
            avatarUrl:
            'https://cdn.lorem.space/images/face/.cache/150x150/kenny-timmer-V-bW-TDTo2c-unsplash.jpg',
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
        text: 'So proud of my little brother for scoring the winning goal in his soccer game. #family #sports',
        user: {
            _id: '8',
            username: 'david',
            avatarUrl:
            'https://cdn.lorem.space/images/face/.cache/150x150/reza-biazar-eSjmZW97cH8-unsplash.jpg',
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
        text: "Can't wait to try out this new vegan restaurant everyone's been raving about. #vegan #foodie",
        user: {
            _id: '9',
            username: 'jessica',
            avatarUrl:
            'https://cdn.lorem.space/images/face/.cache/150x150/rachel-mcdermott-0fN7Fxv1eWA-unsplash.jpg',
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
        text: 'Excited to be visiting a new country for the first time next month! #travels #explore',
        user: {
            _id: '10',
            username: 'matt',
            avatarUrl:
            'https://cdn.lorem.space/images/face/.cache/150x150/jake-fagan-Y7C7F26fzZM-unsplash.jpg',
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
        text: 'Feeling so inspired after attending a workshop on mindfulness. #wellness #mindfulness',
        user: {
            _id: '2',
            username: 'john',
            avatarUrl:
            'https://cdn.lorem.space/images/face/.cache/150x150/julian-wan-WNoLnJo7tS8-unsplash.jpg',
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
        text: "Just finished building my first app with #reactjs and I'm loving it! #coding #tech",
        user: {
            _id: '4',
            username: 'mike',
            avatarUrl:
            'https://cdn.lorem.space/images/face/.cache/150x150/meysam-jarahkar-l4gz33evF9k-unsplash.jpg',
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
            _id: '6',
            username: 'alex',
            avatarUrl:
            'https://cdn.lorem.space/images/face/.cache/150x150/michael-weir-A_cNlkZc5mw-unsplash.jpg',
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
        text: "Can't believe I just hiked to the top of that mountain. Such a rush! #adventure #outdoors",
        user: {
            _id: '10',
            username: 'matt',
            avatarUrl:
            'https://cdn.lorem.space/images/face/.cache/150x150/jake-fagan-Y7C7F26fzZM-unsplash.jpg',
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

