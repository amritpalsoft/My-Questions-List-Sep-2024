const express = require('express')

const router = express.Router();

router.get('/', require('../controller/userController.js').userCont)

router.get('/abc', require('../controller/userController.js').userCont2)

module.exports = router