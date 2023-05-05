use("StatesDB");

db.createCollection("states");

db.states.insertMany(
    [
        {
            "state_id": 1,
            "name": "California",
            "population": 39029342
        },
        {
            "state_id": 2,
            "name": "New South Wales",
            "population": 8072163
        },
        {
            "state_id": 3,
            "name": "Provence-Alpes-Côte d'Azur",
            "population": 5089000
        }
    ]
);

db.createCollection("cities");

db.cities.insertMany(
    [
        {
            "city_id": 1,
            "name": "Los Angeles",
            "population": 3849297,
            "fk_state_id": 1
        },
        {
            "city_id": 2,
            "name": "San Diego",
            "population":  1386932,
            "fk_state_id": 1
        },
        {
            "city_id": 3,
            "name": "Newcastle",
            "population": 682465,
            "fk_state_id": 2
        },
        {
            "city_id": 4,
            "name": "Sydney",
            "population": 5231147,
            "fk_state_id": 2
        },
        {
            "city_id": 5,
            "name": "Marseille",
            "population": 855000,
            "fk_state_id": 3
        },
        {
            "city_id": 6,
            "name": "Nice",
            "population": 948149,
            "fk_state_id": 3
        }
    ]
)

// More cities
db.cities.insertMany(
    [
        {
            "city_id": 7,
            "name": "San Jose",
            "population": 983489,
            "fk_state_id": 1
        },
        {
            "city_id": 8,
            "name": "San Francisco",
            "population": 815201,
            "fk_state_id": 1
        },
        {
            "city_id": 9,
            "name": "Fresno",
            "population": 544510,
            "fk_state_id": 1
        },

        {
            "city_id": 10,
            "name": "Wollongong",
            "population": 214564,
            "fk_state_id": 2
        },
        {
            "city_id": 11,
            "name": "Maitland",
            "population": 87019,
            "fk_state_id": 2
        },
        {
            "city_id": 12,
            "name": "Tweed Heads",
            "population": 60124,
            "fk_state_id": 2
        },

        {
            "city_id": 13,
            "name": "Toulon",
            "population": 167729,
            "fk_state_id": 3
        },
        {
            "city_id": 14,
            "name": "Aix-en-Provence",
            "population": 142743,
            "fk_state_id": 3
        },
        {
            "city_id": 15,
            "name": "Avignon",
            "population": 90194,
            "fk_state_id": 3
        }
    ]
)