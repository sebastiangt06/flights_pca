const express = require('express')
const router = express.Router()
const {getAirlineStats, getAirlineCount} = require('../controllers/statsController')
const { Model } = require('sequelize')

router.get('/stats', getAirlineStats)
router.get('/airlinecount', getAirlineCount)

module.exports = router;