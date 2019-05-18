const express = require('express')
const userController = require('../controllers/userController')
const accountController = require('../controllers/accountController')
const route = express.Router()

route.post('/insert', userController.insert)

route.get('/search/:email', userController.search)

route.put('/update/:email', userController.update)

route.delete('/delete/:email', userController.delete)

route.post('/register',accountController.register)

route.post('/login',accountController.login)

module.exports = route
