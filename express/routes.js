const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.end("hghgh")

})

module.exports = router