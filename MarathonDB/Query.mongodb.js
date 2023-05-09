// ---------------------- Querying with comparison ----------------------

// Return the athlete where "time" were equals to 2 hours and 10 minutes
db.athletes.find(
    {
        time: {
            $eq: "2:10:00"
        }
    }
)

// Return the first document where "time" is not equals to 2:08:38
db.athletes.findOne(
    {
        time: {
            $ne: "2:08:38"
        }
    }
)

// Return the documents where "time" is greater than 150 minutes
db.athletes.find(
    {
        time: {
            $gt: "2:30:00"
        }
    }
)

// Return the athletes where "time" were less or equals to 2 hours and 10 minutes
db.athletes.find(
    {
        time: {
            $lte: "2:10:00"
        }
    }
)

// Return athletes where the team is from BRICS group
db.athletes.find(
    {
        team: {
            $in: ["Brazil", "Russia", "India", "China", "South Africa"]
        }
    }
)