export const tweetsDB = [
    {
        _id: "1",
        text: "I just finished reading the most mind-blowing book about the multiverse theory. #science #physics",
        username: "katie_dev",
        createdAt: 1613671343000,
        replies: [],
        likes: [{ username: "john_dev", _id: "1a" }, { username: "mary_dev", _id: "1b" }]
    },

    {
        _id: "2",
        text: "I can't believe I just found out that flamingos aren't naturally pink! #funfacts #animals",
        username: "john_dev",
        createdAt: 1613574943000,
        replies: [{
            _id: "2a",
            text: "I had no idea! How do they get their pink color?",
            username: "mary_dev",
            createdAt: 1613575043000,
            replies: [],
            likes: [{ username: "katie_dev", _id: "2b" }]
        }],
        likes: [{ username: "katie_dev", _id: "2c" }, { username: "mary_dev", _id: "2d" }]
    },

    {
        _id: "3",
        text: "I just tried sushi for the first time and it was amazing! #food #adventure",
        username: "katie_dev",
        createdAt: 1613485343000,
        replies: [{
            _id: "3a",
            text: "Glad you enjoyed it! What was your favorite roll?",
            username: "john_dev",
            createdAt: 1613485843000,
            replies: [],
            likes: [{ username: "mary_dev", _id: "3b" }]
        }],
        likes: [{ username: "john_dev", _id: "3c" }, { username: "mary_dev", _id: "3d" }]
    },

    {
        _id: "4",
        text: "I just learned how to solve a Rubik's cube in under a minute! #puzzle #achievement",
        username: "mary_dev",
        createdAt: 1613398943000,
        replies: [{
            _id: "4a",
            text: "Wow, that's impressive! I've never been able to solve one.",
            username: "katie_dev",
            createdAt: 1613399143000,
            replies: [],
            likes: [{ username: "john_dev", _id: "4b" }]
        },
        {
            _id: "4c",
            text: "Nice job, Mary! Do you have any tips for beginners?",
            username: "john_dev",
            createdAt: 1613399243000,
            replies: [],
            likes: [{ username: "katie_dev", _id: "4d" }]
        }],
        likes: [{ username: "katie_dev", _id: "4e" }, { username: "john_dev", _id: "4f" }]
    },
    {
        _id: "5",
        text: "I just stumbled upon the most beautiful hiking trail and can't wait to explore it this weekend! #nature #hiking",
        username: "john_dev",
        createdAt: 1613312543000,
        replies: [{
            _id: "5a",
            text: "That sounds like such a great adventure! Can't wait to see your photos.",
            username: "mary_dev",
            createdAt: 1613312643000,
            replies: [],
            likes: [{ username: "katie_dev", _id: "5b" }]
        }],
        likes: [{ username: "katie_dev", _id: "5c" }, { username: "mary_dev", _id: "5d" }]
    },

    {
        _id: "6",
        text: "I just tried my hand at pottery for the first time and I'm hooked! #art #crafts",
        username: "katie_dev",
        createdAt: 1613225943000,
        replies: [{
            _id: "6a",
            text: "That's so cool, Katie! I've always wanted to try pottery.",
            username: "mary_dev",
            createdAt: 1613226143000,
            replies: [],
            likes: [{ username: "john_dev", _id: "6b" }]
        }],
        likes: [{ username: "john_dev", _id: "6c" }, { username: "mary_dev", _id: "6d" }]
    },

    {
        _id: "7",
        text: "I just learned how to play the ukulele and I'm loving it! #music #instrument",
        username: "mary_dev",
        createdAt: 1613129543000,
        replies: [{
            _id: "7a",
            text: "That's so cool, Mary! I've always wanted to learn how to play an instrument.",
            username: "katie_dev",
            createdAt: 1613129643000,
            replies: [],
            likes: [{ username: "john_dev", _id: "7b" }]
        }],
        likes: [{ username: "katie_dev", _id: "7c" }, { username: "john_dev", _id: "7d" }]
    },
    {
        _id: "9",
        text: "I just tried my hand at baking and made the most delicious chocolate chip cookies! #baking #food",
        username: "katie_dev",
        createdAt: 1612936343000,
        replies: [{
            _id: "9a",
            text: "Those cookies sound amazing, Katie! Can't wait to try the recipe.",
            username: "mary_dev",
            createdAt: 1612936453000,
            replies: [],
            likes: [{ username: "john_dev", _id: "9b" }]
        }],
        likes: [{ username: "john_dev", _id: "9c" }, { username: "mary_dev", _id: "9d" }]
    },

    {
        _id: "10",
        text: "I just tried a new yoga class and it was so relaxing and rejuvenating! #yoga #wellness",
        username: "mary_dev",
        createdAt: 1612839843000,
        replies: [{
            _id: "10a",
            text: "Yoga is such a great way to de-stress and take care of your body and mind. Glad you enjoyed the class!",
            username: "katie_dev",
            createdAt: 1612840043000,
            replies: [],
            likes: [{ username: "john_dev", _id: "10b" }]
        }],
        likes: [{ username: "katie_dev", _id: "10c" }, { username: "john_dev", _id: "10d" }]
    },

    {
        _id: "11",
        text: "I just tried a new restaurant and the food was incredible! #food #adventure",
        username: "john_dev",
        createdAt: 1612743343000,
        replies: [{
            _id: "11a",
            text: "I love trying new restaurants and discovering new dishes! What was your favorite thing you ate?",
            username: "mary_dev",
            createdAt: 1612743443000,
            replies: [],
            likes: [{ username: "katie_dev", _id: "11b" }]
        }],
        likes: [{ username: "katie_dev", _id: "11c" }, { username: "mary_dev", _id: "11d" }]
    },

    {
        _id: "13",
        text: "I just tried a new coffee shop and the latte was the best I've ever had! #coffee #food",
        username: "jake_dev",
        createdAt: 1612551243000,
        replies: [],
        likes: [{ username: "katie_dev", _id: "13a" }, { username: "mary_dev", _id: "13b" }]
    },

    {
        _id: "14",
        text: "I just learned how to code a basic website and it was so satisfying! #coding #achievement",
        username: "sarah_dev",
        createdAt: 1612454743000,
        replies: [],
        likes: [{ username: "katie_dev", _id: "14a" }, { username: "mary_dev", _id: "14b" }]
    },

    {
        _id: "15",
        text: "I just finished a 5k race and it was such a great feeling of accomplishment! #fitness #achievement",
        username: "mike_dev",
        createdAt: 1612358143000,
        replies: [],
        likes: [{ username: "katie_dev", _id: "15a" }, { username: "mary_dev", _id: "15b" }]
    },

    {
        _id: "16",
        text: "I just tried a new Thai restaurant and the flavors were so unique and delicious! #food #adventure",
        username: "tina_dev",
        createdAt: 1612260943000,
        replies: [],
        likes: [{ username: "katie_dev", _id: "16a" }, { username: "mary_dev", _id: "16b" }]
    },

    {
        _id: "17",
        text: "I just learned how to play a new card game and it was so much fun! #games #fun",
        username: "dave_dev",
        createdAt: 1612164443000,
        replies: [],
        likes: [{ username: "katie_dev", _id: "17a" }, { username: "mary_dev", _id: "17b" }]
    },

    {
        _id: "18",
        text: "I just tried a new hiking trail and the views were breathtaking! #nature #hiking",
        username: "emily_dev",
        createdAt: 1612067943000,
        replies: [],
        likes: [{ username: "katie_dev", _id: "18a" }, { username: "mary_dev", _id: "18b" }]
    },

    {
        _id: "20",
        text: "נסתיים לקרוא את הספר האהוב שלי השנה והוא היה מדהים! #ספרים #התעניינות",
        username: "dani_dev",
        createdAt: 1611874943000,
        replies: [],
        likes: [{ username: "katie_dev", _id: "20a" }, { username: "mary_dev", _id: "20b" }]
    },

    {
        _id: "21",
        text: "נסתיים לעשות את האוכל הטעים ביותר שכשתי עדיין! #אוכל #התעניינות",
        username: "yael_dev",
        createdAt: 1611778344000,
        replies: [],
        likes: [{ username: "katie_dev", _id: "21a" }, { username: "mary_dev", _id: "21b" }]
    },

    {
        _id: "22",
        text: "נסתיים לעשות את הטיול הנפלא ביותר שכשתי עדיין! #תיירות #התעניינות",
        username: "oren_dev",
        createdAt: 1611675944000,
        replies: [],
        likes: [{ username: "katie_dev", _id: "22a" }, { username: "mary_dev", _id: "22b" }]
    },

    {
        _id: "23",
        text: "נסתיים לעשות את המשחק הכיף ביותר שכשתי עדיין! #משחקים #כיף",
        username: "tamar_dev",
        createdAt: 1611579344000,
        replies: [],
        likes: [{ username: "katie_dev", _id: "23a" }, { username: "mary_dev", _id: "23b" }]
    },
    {
        _id: "25",
        text: "I just tried a new sushi restaurant and the rolls were so fresh and delicious! #food #adventure",
        username: "matt_dev",
        createdAt: 1611476344000,
        replies: [],
        likes: [
            { username: "katie_dev", _id: "25a" },
            { username: "mary_dev", _id: "25b" },
            { username: "john_dev", _id: "25c" },
            { username: "jake_dev", _id: "25d" },
            { username: "sarah_dev", _id: "25e" },
            { username: "mike_dev", _id: "25f" },
            { username: "tina_dev", _id: "25g" },
            { username: "dave_dev", _id: "25h" },
            { username: "emily_dev", _id: "25i" },
            { username: "chris_dev", _id: "25j" },
            { username: "dani_dev", _id: "25k" },
            { username: "yael_dev", _id: "25l" }
        ]
    },
    {
        _id: "26",
        text: "I just tried a new Italian restaurant and the pasta was the best I've ever had! #food #adventure",
        username: "lisa_dev",
        createdAt: 1611379744000,
        replies: [],
        likes: [
            { username: "katie_dev", _id: "26a" },
            { username: "mary_dev", _id: "26b" },
            { username: "john_dev", _id: "26c" },
            { username: "jake_dev", _id: "26d" },
            { username: "sarah_dev", _id: "26e" },
            { username: "mike_dev", _id: "26f" },
            { username: "tina_dev", _id: "26g" },
            { username: "dave_dev", _id: "26h" },
            { username: "emily_dev", _id: "26i" },
            { username: "chris_dev", _id: "26j" },
            { username: "dani_dev", _id: "26k" },
            { username: "yael_dev", _id: "26l" }
        ]
    },
    {
        _id: "27",
        text: "I just tried a new vegan restaurant and the food was so tasty and healthy! #food #vegan",
        username: "lisa_dev",
        createdAt: 1611283144000,
        replies: [
            {
                _id: "27a",
                text: "I've been wanting to try more vegan restaurants too. How did you find this one?",
                username: "katie_dev",
                createdAt: 1611283244000,
                replies: [],
                likes: [{ username: "mary_dev", _id: "27b" }]
            },
            {
                _id: "27c",
                text: "I'm always looking for new vegan restaurants to try. Do you have any recommendations?",
                username: "mary_dev",
                createdAt: 1611283244000,
                replies: [],
                likes: [{ username: "katie_dev", _id: "27d" }]
            },
            {
                _id: "27e",
                text: "I love trying new vegan restaurants. What was your favorite dish at this one?",
                username: "john_dev",
                createdAt: 1611283244000,
                replies: [],
                likes: [{ username: "katie_dev", _id: "27f" }]
            },
            {
                _id: "27g",
                text: "I've been trying to eat more plant-based meals and I'm always looking for new vegan restaurants to try. Thanks for sharing!",
                username: "jake_dev",
                createdAt: 1611283244000,
                replies: [],
                likes: [{ username: "katie_dev", _id: "27h" }]
            },
            {
                _id: "27i",
                text: "I'm always on the lookout for tasty vegan restaurants. I'll have to check this one out!",
                username: "sarah_dev",
                createdAt: 1611283244000,
                replies: [],
                likes: [{ username: "katie_dev", _id: "27j" }]
            }
        ],
        likes: [{ username: "katie_dev", _id: "27k" }, { username: "mary_dev", _id: "27l" }]
    }
] 

console.log(tweetsDB);