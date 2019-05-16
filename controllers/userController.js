const mongoose = require('mongoose');
const User = require('../models/user');

mongoose.connect('mongodb://127.0.0.1:27017/Satya', { useNewUrlParser: true })

var newUser = new User({
    firstName : 'Satya Prakash',
    lastName : 'Nandy',
    description : 'Best Web Developer'
})

newUser.save(function(err){
    if(err)
     return 'went';
     mongoose.connection.close();
})
