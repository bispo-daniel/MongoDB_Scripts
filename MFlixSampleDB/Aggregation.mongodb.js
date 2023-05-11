// This file manipulates the MongoDB sample database called MFlix
use("sample_mflix")

// Query the number of movies from 1999
db.movies.aggregate(
    [
        {
            $match: {
                year: 1999
            }
        },
        {
            $count: 'Number of movies from 1999'
        }
    ]
)

// Query movies with imdb rating greater than 5 sorted by the imdb rating
db.movies.aggregate(
    [
        {
            $match: {
                type: "movie",
                "imdb.rating": {
                    $gt: 5
                }
            }
        },
        {
            $project: {
              _id: 0,
              title: 1,
              year: 1,
              "imdb.rating": 1
            }
        },
        {
            $sort: {
              "imdb.rating": -1
            }
        }
    ]
).toArray()

// Query the number of movies per year sorted by movies quantity
db.movies.aggregate(
    [
        {
            $group: {
              _id: "$year",
              "Number of movies": {
                $count: {}
              }
            }
        },
        {
            $sort: {
                "Number of movies": -1
            }
        }
    ]
).toArray()

// Join two collections: "movies" and "comments"
// Join the comments' documents from the movie "The Godfather"
db.movies.aggregate(
    [
        {
            $match: {
                title: "The Godfather"
            }
        },
        {
            $lookup: {
                from: "comments",
                localField: "_id",  // Field from "movies"
                foreignField: "movie_id",   // Field from "comments"
                as: "Comments from The Godfather's audience:"
            }
        },
        {
            $project: {
                _id: 0,
                title: 1,
                "Comments from The Godfather's audience:.text": 1
            }
        },
        {
            $addFields: {
              "My comment": "VERY NICE! GREAT SUCCESS!"
            }
        }
    ]
)