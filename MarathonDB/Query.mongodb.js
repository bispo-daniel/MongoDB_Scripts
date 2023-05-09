// Return every athlete
db.athletes.find().sort("rank").toArray()

db.getName()
// MarathonDB

db.getCollection("athletes")
// "MarathonDB.athletes"

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

// ---------------------- Querying with logical operators ----------------------

// Return chinese athletes that finished with a time less than 2 hours and 20 minutes
db.athletes.find(
    {
        $and: [
            {
                team: "China"
            },
            {
                time: {
                    $lt: "2:20:00"
                }
            }
        ]
    }
)

// Return the first athlete to finish from Great Britain or Australia
db.athletes.findOne(
    {
        $or: [
            {team: "Great Britain"},
            {team: "Australia"}
        ]
    }
)

let africanCountries = 

// Return athletes where "team" not from Africa 
db.athletes.find(
    {
        team: {
            $not: {
                $in: [
                    "Algeria",
                    "Angola",
                    "Benin",
                    "Botswana",
                    "Burkina Faso",
                    "Burundi",
                    "Cabo Verde",
                    "Cameroon",
                    "Central African Republic",
                    "Chad",
                    "Comoros",
                    "Democratic Republic of the Congo",
                    "Djibouti",
                    "Egypt",
                    "Equatorial Guinea",
                    "Eritrea",
                    "Eswatini",
                    "Ethiopia",
                    "Gabon",
                    "Gambia",
                    "Ghana",
                    "Guinea",
                    "Guinea-Bissau",
                    "Ivory Coast",
                    "Kenya",
                    "Lesotho",
                    "Liberia",
                    "Libya",
                    "Madagascar",
                    "Malawi",
                    "Mali",
                    "Mauritania",
                    "Mauritius",
                    "Morocco",
                    "Mozambique",
                    "Namibia",
                    "Niger",
                    "Nigeria",
                    "Republic of the Congo",
                    "Rwanda",
                    "Sao Tome and Principe",
                    "Senegal",
                    "Seychelles",
                    "Sierra Leone",
                    "Somalia",
                    "South Africa",
                    "South Sudan",
                    "Sudan",
                    "Tanzania",
                    "Togo",
                    "Tunisia",
                    "Uganda",
                    "Zambia",
                    "Zimbabwe"
                ]
            }
        }
    }
).toArray()

// Return athletes where "team" is from Africa 
db.athletes.find(
    {
        team: {
            $in: [
                "Algeria",
                "Angola",
                "Benin",
                "Botswana",
                "Burkina Faso",
                "Burundi",
                "Cabo Verde",
                "Cameroon",
                "Central African Republic",
                "Chad",
                "Comoros",
                "Democratic Republic of the Congo",
                "Djibouti",
                "Egypt",
                "Equatorial Guinea",
                "Eritrea",
                "Eswatini",
                "Ethiopia",
                "Gabon",
                "Gambia",
                "Ghana",
                "Guinea",
                "Guinea-Bissau",
                "Ivory Coast",
                "Kenya",
                "Lesotho",
                "Liberia",
                "Libya",
                "Madagascar",
                "Malawi",
                "Mali",
                "Mauritania",
                "Mauritius",
                "Morocco",
                "Mozambique",
                "Namibia",
                "Niger",
                "Nigeria",
                "Republic of the Congo",
                "Rwanda",
                "Sao Tome and Principe",
                "Senegal",
                "Seychelles",
                "Sierra Leone",
                "Somalia",
                "South Africa",
                "South Sudan",
                "Sudan",
                "Tanzania",
                "Togo",
                "Tunisia",
                "Uganda",
                "Zambia",
                "Zimbabwe"
            ]
        }
    }
)