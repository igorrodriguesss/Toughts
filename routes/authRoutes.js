const express = require('express')
const { get } = require('express/lib/response')
const router = express.Router()
const AuthController = require('../controllers/AuthController')


router.get('/login', AuthController.login)
router.get('/register', AuthController.register)
router.post('/register', AuthController.registerPost)

module.exports = router