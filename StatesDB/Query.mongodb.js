// Query all of states collection
db.states.find();

// Query only the name field from all documents of states colletion
db.states.find({}, {_id : 0, name: 1})

// Query only population field of states colletion descending sorted
db.states.find({}, {_id: 0, population: 1}).sort({population: -1})

// Query all of cities collection
db.cities.find();

// Query only name and population fields of Cities 
db.cities.find({}, {_id: 0, name: 1, population: 1});

// Query Cities from Provence-Alpes-Côte D'Azur
db.cities.find({ fk_state_id: 3}, {_id: 0, name: 1});

// Query only name and population fields from cities collection
db.cities.find({}, {_id: 0, name: 1, population: 1})

// Query where city's population >= 2.500.000, return name and population fields
db.cities.find({population: {$gte: 2500000}}, {_id: 0, name: 1, population: 1})

// Query where city's population < 2.500.000, return name and population fields
db.cities.find({population: {$lt: 2500000}}, {_id: 0, name: 1, population: 1})

// Query all cities but New South Wales' cities
db.cities.find({fk_state_id: {$ne: 2}}, {_id: 0, name: 1, population: 1})