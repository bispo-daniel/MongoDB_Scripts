// Update Los Angeles name to LA
db.cities.updateOne({name: "Los Angeles"}, {$set: {name: "LA"}});

// Update Sydney population to 0
db.cities.updateOne({name: "Sydney"}, {$set: {population: 0}});

// Update Marseille name to X and population to 0
db.cities.updateOne({name: "Marseille"}, {$set: {name: "X", population: 0}})

// Update Tweed Heads fk_state_id to 999
db.cities.updateOne({name: "Tweed Heads"}, {$set: {fk_state_id: 999}})