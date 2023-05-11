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