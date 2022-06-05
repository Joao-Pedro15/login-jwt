const express = require('express')
const router = express.Router()
const { signin, getDatas } = require('../controllers/controller')
const { authorize } = require('../controllers/auth')

router.get('/datas', authorize, getDatas)
router.post('/login', signin)

module.exports = router