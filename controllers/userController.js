const user = require('../models/user');

var userController ={
    insert : function(request,response){

        let newUser = new user({
            firstName : request.body.firstName,
            lastName : request.body.lastName,
            email : request.body.email,
            password : request.body.password
        })
    
        newUser.save().then((user) => {
            response.status(200).json(user)
        }).catch((error) => {
            response.status(500).json({'error' : error})
        })

    },
    search : function(request,response){

        user.findOne({'email':request.params.email}).then((user) => {
            response.status(200).json(user)
        }).catch((error) => {
            response.status(500).json({'error':error})
        })

    },
    update : function(request,response){

        let updatedUser = {$set:{

            firstName : request.body.firstName,
            lastName : request.body.lastName,
            email : request.body.email,
            password : request.body.password
        }}

        user.findOneAndUpdate({'email':request.params.email},updatedUser,{new:true}).then((user) => {
            response.status(200).json(user)
        }).catch((error) => {
            response.status(500).json({'error':error})
        })
    },
    delete : function(request,response){

        user.findOneAndDelete({'email':request.params.email}).then((user) => {

            response.status(200).json(user)

        }).catch((error) => {

            response.status(500).json({'error':error})
            
        })
    }
}

module.exports = userController



