const express = require('express')
// const bodyParser = require('body-parser')
const routes = require('./routes/route')

const app = express()

const port = 8088

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
app.use(routes)

app.get('/', (request, response) => {
  response.status(200).json({ 'message': 'Welcome To My Application' })
})

app.listen(port, (request, response) => {
  console.log('Server Is Running')
})
