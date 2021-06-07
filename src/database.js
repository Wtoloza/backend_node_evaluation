const { config } = require('./config');
const mongoose = require('mongoose')

// Create URI of db
const MONGO_URI = `mongodb://${config.dbHost}/${config.dbName}`

// Connect whit de db
mongoose.connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err))

// Unique Error
//mongoose.set('useCreateIndex', true)
//mongoose.set('useFindAndModify', false)