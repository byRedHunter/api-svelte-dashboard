const { Router } = require('express')
const router = Router()

// db
const overview = require('../overview.json')
const dashboard = require('../dashboard.json')

// get data
router.get('/', (req, res) => {
	res.json(dashboard)
})

router.get('/overview', (req, res) => {
	res.json(overview)
})

module.exports = router
