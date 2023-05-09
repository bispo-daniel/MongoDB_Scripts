// Delete athletes from BRICS group
db.athletes.deleteMany(
    {
        team: {
            $in: [
                "Brazil",
                "Russia",
                "India",
                "China",
                "South Africa"
            ]
        }
    }
)

// Delete the athlete Bashir Abdi
db.athletes.deleteOne(
    {
        name: "Bashir Abdi"
    }
)