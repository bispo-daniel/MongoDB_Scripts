// Delete all California's cities
db.cities.deleteMany({fk_state_id: 1})

// Delete California
db.states.deleteOne({name: "California"})