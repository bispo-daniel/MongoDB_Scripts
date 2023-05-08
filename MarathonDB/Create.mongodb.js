use("MarathonDB");

db.createCollection("runners");

import runners from './DataSource/RunnersObject'
db.runners.insertMany(runners)