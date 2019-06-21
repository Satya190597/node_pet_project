const mongoose = require('mongoose')
const config = require('../config')

// [Disable Buffer Command Globally]

var configureMongoose = function () {
  mongoose.set('bufferCommands', false)

  mongoose.connect(config.mongo.url, {}, (error) => {
    if (error) { console.log(error) } else { console.log('Database Successfully Connected ....') }
  })
}

module.exports = configureMongoose
