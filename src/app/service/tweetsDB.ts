export const tweetsDB = [
    {
        _id: 'a1b2c3d4',
        tweetImgUrl: 'https://picsum.photos/id/{{tweet._id}}/400/200',
        text: 'Just finished an awesome game of football with my friends! #football',
        user: {
            _id: 'user1',
            username: 'jane',
            avatarUrl:
                'https://api.lorem.space/image/face?w=150&h=150&hash=8B7BCDC2',
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
            _id: 'user2',
            username: 'john',
            avatarUrl:
                'https://api.lorem.space/image/face?w=150&h=150&hash=500B67FB',
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
                'https://api.lorem.space/image/face?w=150&h=150&hash=A89D0DE6',
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
            _id: 'user3',
            username: 'sarah',
            avatarUrl:
                'https://api.lorem.space/image/face?w=150&h=150&hash=A89D0DE6',
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
            _id: 'user4',
            username: 'mike',
            avatarUrl:
                'https://api.lorem.space/image/face?w=150&h=150&hash=225E6693',
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
            _id: 'user5',
            username: 'lisa',
            avatarUrl:
                'https://api.lorem.space/image/face?w=150&h=150&hash=9D9539E7',
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
            _id: 'user6',
            username: 'alex',
            avatarUrl:
                'https://api.lorem.space/image/face?w=150&h=150&hash=BDC01094',
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
            _id: 'user7',
            username: 'samuel',
            avatarUrl:
                'https://api.lorem.space/image/face?w=150&h=150&hash=7F5AE56A',
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
            _id: 'user8',
            username: 'david',
            avatarUrl:
                'https://api.lorem.space/image/face?w=150&h=150&hash=4F32C4CF',
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
            _id: 'user9',
            username: 'jessica',
            avatarUrl:
                'https://api.lorem.space/image/face?w=150&h=150&hash=B0E33EF4',
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
            _id: 'user10',
            username: 'matt',
            avatarUrl:
                'https://api.lorem.space/image/face?w=150&h=150&hash=2D297A22',
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
            _id: 'user2',
            username: 'john',
            avatarUrl:
                'https://api.lorem.space/image/face?w=150&h=150&hash=500B67FB',
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
            _id: 'user4',
            username: 'mike',
            avatarUrl:
                'https://api.lorem.space/image/face?w=150&h=150&hash=225E6693',
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
            _id: 'user6',
            username: 'alex',
            avatarUrl:
                'https://api.lorem.space/image/face?w=150&h=150&hash=BDC01094',
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
            _id: 'user10',
            username: 'matt',
            avatarUrl:
                'https://api.lorem.space/image/face?w=150&h=150&hash=2D297A22',
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

// export const tweetsDB = [
//     {
//         _id: 'tweet1',
//         tweetImgUrl: 'https://api.lorem.space/image?w=150&h=180&hash=8B7BCDC2',
//         text: 'Just cooked the best pasta dish for dinner! #cooking',
//         user: {
//             _id: 'user1',
//             username: 'jane',
//             avatarUrl:
//                 'https://api.lorem.space/image/face?w=150&h=150&hash=8B7BCDC2',
//         },
//         createdAt: 1605343051000,
//         replies: ['tweet2', 'tweet3'],
//         likes: [
//             {
//                 _id: 'user2',
//                 username: 'john',
//                 avatarUrl:
//                     'https://api.lorem.space/image/face?w=150&h=150&hash=500B67FB',
//             },
//             {
//                 _id: 'user3',
//                 username: 'sarah',
//                 avatarUrl:
//                     'https://api.lorem.space/image/face?w=150&h=150&hash=A89D0DE6',
//             },
//         ],
//     },
//     {
//         _id: 'tweet2',
//         tweetImgUrl: 'https://api.lorem.space/image?w=150&h=180&hash=500B67FB',
//         text: 'Heading off on a trip to Bali! #travels #trips',
//         user: {
//             _id: 'user4',
//             username: 'mike',
//             avatarUrl:
//                 'https://api.lorem.space/image/face?w=150&h=150&hash=225E6693',
//         },
//         createdAt: 1605343051000,
//         replies: ['tweet1'],
//         likes: [
//             {
//                 _id: 'user5',
//                 username: 'lisa',
//                 avatarUrl:
//                     'https://api.lorem.space/image/face?w=150&h=150&hash=9D9539E7',
//             },
//             {
//                 _id: 'user6',
//                 username: 'alex',
//                 avatarUrl:
//                     'https://api.lorem.space/image/face?w=150&h=150&hash=BDC01094',
//             },
//         ],
//     },
//     {
//         _id: 'tweet3',
//         tweetImgUrl: 'https://api.lorem.space/image?w=150&h=180&hash=A89D0DE6',
//         text: 'Just finished building a new project with #reactjs!',
//         user: {
//             _id: 'user7',
//             username: 'samuel',
//             avatarUrl:
//                 'https://api.lorem.space/image/face?w=150&h=150&hash=7F5AE56A',
//         },
//         createdAt: 1605343051000,
//         replies: ['tweet1'],
//         likes: [],
//     },
//     {
//         _id: 'tweet4',
//         tweetImgUrl: 'https://api.lorem.space/image?w=150&h=180&hash=8B7BCDC2',
//         text: 'Just caught the winning touchdown at the football game! #football',
//         user: {
//             _id: 'user1',
//             username: 'jane',
//             avatarUrl:
//                 'https://api.lorem.space/image/face?w=150&h=150&hash=8B7BCDC2',
//         },
//         createdAt: 1605343051000,
//         replies: ['tweet2', 'tweet3'],
//         likes: [
//             {
//                 _id: 'user2',
//                 username: 'john',
//                 avatarUrl:
//                     'https://api.lorem.space/image/face?w=150&h=150&hash=500B67FB',
//             },
//             {
//                 _id: 'user3',
//                 username: 'sarah',
//                 avatarUrl:
//                     'https://api.lorem.space/image/face?w=150&h=150&hash=A89D0DE6',
//             },
//         ],
//     },
//     {
//         _id: 'tweet5',
//         tweetImgUrl: '',
//         text: 'Heading off on a trip to Bali! #travels #trips',
//         user: {
//             _id: 'user4',
//             username: 'mike',
//             avatarUrl:
//                 'https://api.lorem.space/image/face?w=150&h=150&hash=225E6693',
//         },
//         createdAt: 1605343051000,
//         replies: ['tweet1'],
//         likes: [
//             {
//                 _id: 'user5',
//                 username: 'lisa',
//                 avatarUrl:
//                     'https://api.lorem.space/image/face?w=150&h=150&hash=9D9539E7',
//             },
//             {
//                 _id: 'user6',
//                 username: 'alex',
//                 avatarUrl:
//                     'https://api.lorem.space/image/face?w=150&h=150&hash=BDC01094',
//             },
//         ],
//     },
// ];
