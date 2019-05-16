const express = require('express')
const mongose = require('mongoose')
const user = require('./models/user.js')


mongose.connect('mongodb://127.0.0.1:27017/Satya', { useNewUrlParser: true }).then(() => {
  console.log('Database Connected')
}).catch(() => {
  console.log('Sorry Something Went Wrong')
})

const app = express()

const port = 8088

app.get('/', (request, response) => {
  response.status(200).json({ 'message': 'Welcome To My Application' })
})

app.listen(port, (request, response) => {
  console.log('Server Is Running')
})
