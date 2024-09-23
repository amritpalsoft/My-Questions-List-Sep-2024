const express = require('express')
const connectToMongo = require('./config/db')

connectToMongo()
const app = express()
const port = 5001

app.use(express.json())

app.use('/', require('./routes/user.js'))

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})