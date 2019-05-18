const user = require('../models/user')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

var accountController = {
    register : function(request,response){
        let newUser = new user({
            firstName : request.body.firstName,
            lastName : request.body.lastName,
            email : request.body.email,
            password : bcrypt.hashSync(request.body.password,8),
        })

        newUser.save().then((user) => {

            let authToken = jwt.sign({id:user._id},config.secret,{expiresIn: 86400}) // userid | secret key | expires in 24 hours

            response.status(200).json({token:authToken,data:user})

        }).catch((error) => {
            response.status(500).json({'error':error})
        })
    },
    login : function(request,response){

        user.findOne({email:request.body.email}).then((user) => {

        bcrypt.compareSync(request.body.password,user.password) ? response.status(200).json({token:jwt.sign({id:user._id},config.secret,{expiresIn: 86400})}) : response.status(401).json({warning:'invalid username or password'})

        }).catch((error) => {

            response.status(401).json({warning:'Invalid Username Or Password'})
        })
    }
}

module.exports = accountController