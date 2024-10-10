const express = require('express')
const router = express.Router()
const {getAllFlights, createFlight} = require('../controllers/flightControlller')
const { Model } = require('sequelize')

router.get('/flights', getAllFlights)
router.post('/flights', createFlight)

module.exports = router;
