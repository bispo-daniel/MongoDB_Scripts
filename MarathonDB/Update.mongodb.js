// Update the brazillian's athlete time to the current date
db.athletes.updateOne(
    {
        team: "Brazil"
    },
    {
        $currentDate: {
            time: {
                $type: "date"
            }
        }
    }
)

// Update athlete where the rank is 76 to 80
db.athletes.updateOne(
    {   
        rank: 76
    },
    {
        $inc: {
            rank: 4
        }
    }
)

// Rename the field 'team' to 'TEAM' of the 57th athlete 
db.athletes.updateOne(
    {
        rank: 57
    },
    {
        $rename: {
            "team": "TEAM"
        }
    }
)

// Update winner's name to NEW NAME
db.athletes.updateOne(
    {
        rank: 1
    },
    {
        $set: {
            name: "NEW NAME"
        }
    }
)

// Remove the "team" field from the 8th athlete
db.athletes.updateOne(
    {
        rank: 8
    },
    {
        $unset: {
            team: ""
        }
    }
)