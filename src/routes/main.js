const { Router } = require('express')
const router = Router()

// db
const { dashboard, overview } = require('../db.json')

const data = { dashboard, overview }

// get data
router.get('/', (req, res) => {
	res.json(data)
})

module.exports = router
