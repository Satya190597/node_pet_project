const mongoose = require('mongoose');
const User = require('../models/user');

mongoose.connect('mongodb://127.0.0.1:27017/Satya', { useNewUrlParser: true })

var newUser = new User({
    firstName : 'Satya Prakash',
    lastName : 'Nandy',
    email : 'nandy@yahoo.in',
    password : 'test'
})

newUser.save().then((user) => {
    console.log(user)
}).catch((error) => {
    console.log({'error':error})
})
