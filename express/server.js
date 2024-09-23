const express = require('express')
const connectToMongo = require('./dbConfig')
const app = express()
const appRoutes = require('./routes')
require('dotenv').config();

connectToMongo()


app.use(express.json())


app.use('/api', appRoutes)

app.listen(process.env.PORT, () => {
    console.log('server started');

})