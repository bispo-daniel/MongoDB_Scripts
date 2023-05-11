// This file manipulates the MongoDB sample database called MFlix

use("sample_mflix")

// Query the title field from all movies from 1999 ordered by the IMDB rating descending
db.movies.find(
    {
        year: 1999
    },
    {
        _id: 0,
        title: 1,
        "imdb.rating": 1
    }
).sort(
    {
        "imdb.rating": -1
    }
).toArray()

// Query the movie with the highest number of comments
db.movies.find(
    {},
    {
        _id: 0,
        title: 1,
        plot: 1,
        num_mflix_comments: 1
    }
).sort(
    {
        num_mflix_comments: -1
    }
).limit(10).toArray()

// Query movies from David Fincher director ordered by rotten tomatoes rating
db.movies.find(
    {
        directors: "David Fincher"
    },
    {
        _id: 0,
        title: 1,
        "tomatoes.critic.rating": 1
    }
).sort(
    {
        "tomatoes.critic.rating": -1
    }
)

// Query movies where Brad Pitt were starred ordered by metacritic's rating
db.movies.find(
    {
        cast: "Brad Pitt"
    },
    {
        _id: 0,
        title: 1,
        metacritic: 1
    }
).sort(
    {
        metacritic: -1
    }
)

// Query movies where Robert De Niro and Al Pacino were starred
db.movies.find(
    {
        $and: [
            {cast: "Robert De Niro"},
            {cast: "Al Pacino"}
        ]
    },
    {
        _id: 0,
        title: 1
    }
)

// Query movies where "runtime" is greater than 150 minutes ordered by imdb rating
db.movies.find(
    {
        runtime: { 
            $gte: 150
        },
        type: "movie"
    },
    {
        _id: 0,
        title: 1
    }
).sort(
    {
        "imdb.rating": -1
    }
).toArray()