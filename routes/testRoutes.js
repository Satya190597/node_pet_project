/*
    Import Modules : ['express']
*/
var express = require('express')

var router = express.Router()

// [USER PROFILE]

router.get('/test/user',(request,response) => {
    response.status(200).json({'message':'This Route Must Be Protected For User Only'})
})

// [ADMIN PROFILE]

router.get('/test/admin',(request,response) => {
    response.status(200).json({'message':'This Route Must Be Protected For Admin Only'})
})

module.exports = router