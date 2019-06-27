/*
    Import Modules : ['mongoose']
*/
const mongoose = require('mongoose')

var comment = new mongoose.Schema({
  userId: {
    type: String
  },
  text: {
    type: String
  }
}, {
  timestamps: true
})

module.exports = comment
