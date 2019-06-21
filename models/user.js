/*
    Import Modules : ['mongoose','./rating']
*/
const mongoose = require('mongoose')
const rating = require('./rating')

var user = new mongoose.Schema({
  email: {
    type: String
  },
  username: {
    type: String
  },
  rating: {
    type: [rating]
  }
})

module.exports = mongoose.model('User', user)
