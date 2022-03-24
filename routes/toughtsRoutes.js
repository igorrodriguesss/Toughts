const express = require('express')
const { get } = require('express/lib/response')
const router = express.Router()
const ToughtController = require('../controllers/ToughtController')


router.get('/', ToughtController.showToughts)

module.exports = router