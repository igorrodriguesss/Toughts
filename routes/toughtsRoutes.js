const express = require('express')
const { get } = require('express/lib/response')
const router = express.Router()
const ToughtController = require('../controllers/ToughtController')

const chechAuth = require('../helpers/auth').chechAuth

router.get('/add', checkAuth, ToughtController.createTought)
router.post('/add', checkAuth, ToughtController.createToughtSave)
router.get('/edit/:id', checkAuth, ToughtController.updateTought)
router.post('/edit', checkAuth, ToughtController.updateToughtSave)
router.post('/remove', checkAuth, ToughtController.removeTought)
router.get('/dashboard', checkAuth, ToughtController.Dashboard)
router.get('/', ToughtController.showToughts)


module.exports = router