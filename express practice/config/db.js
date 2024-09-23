const mongoose = require('mongoose')

const connectToMongo = async () => {

    await mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')
    console.log('connected to mongodb');
}


module.exports = connectToMongo