const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/beers',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('connected', function(){
    console.log(`Connected to ${db.name} at ${db.host}: ${db.port}`)
})

module.exports = mongoose;