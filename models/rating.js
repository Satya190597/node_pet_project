/*
    Import Modules : ['mongoose']
*/
const mongoose = require('mongoose')

var rating = new mongoose.Schema({
  userId: {
    type: String
  },
  rating: {
    type: Number
  }
}, {
  timestamps: true
})

module.exports = rating
