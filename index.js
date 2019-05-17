const express = require('express')
const mongose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('./config.js')
const routes = require('./routes/route')

const app = express()

mongose.connect(config.connectionUrl, config.connectionOption).then(() => {
  console.log('*** Database Connected ***')
}).catch((error) => {
  console.log('*** Unable To Connect To Database ***\nError : '+error)
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes)

app.get('/', (request, response) => {
  response.status(200).json({ 'message': 'Welcome To My Application' })
})

app.listen(config.port, (request, response) => {
  console.log('Server Is Running')
})
