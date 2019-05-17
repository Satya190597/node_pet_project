const express = require('express')
const userController = require('../controllers/userController')
const route = express.Router()

route.post('/insert', userController.insert)

route.get('/search/:email', userController.search)

route.put('/update/:email', userController.update)

route.delete('/delete/:email', userController.delete)

module.exports = route
