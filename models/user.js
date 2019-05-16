const mongoose = require('mongoose')

user = new mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName :{
        type : String,
        required : true
    },
    description : {
        type : String
    }
})

module.exports = mongoose.model('User',user)