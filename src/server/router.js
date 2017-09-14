const express = require('express')

const router = express.Router()
const controller = require('./controller')

router.get('/v1/items', controller.getItems)
router.get('/v1/items/:id', controller.getItem)
router.post('/v1/items', controller.addItem)

module.exports = router
