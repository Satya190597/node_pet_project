/*
    Import Modules : ['express','../services/imageUpload']
*/
const express = require('express')
const uploadService = require('../services/imageUpload')

var router = express.Router()

// [USER PROFILE]

router.get('/test/user', (request, response) => {
  response.status(200).json({ 'message': 'This Route Must Be Protected For User Only' })
})

// [ADMIN PROFILE]

router.get('/test/admin', (request, response) => {
  response.status(200).json({ 'message': 'This Route Must Be Protected For Admin Only' })
})

// [TEST UPLOAD IMAGE ROUTES]
router.post('/test/uploadImage',(request,response) => {
    uploadService('image')(request,response,function(error){
    return (error) ? response.end(error) : response.status(200).json({'file':'File Uploaded'})
  })
})
router.get('/test/uploadImage',(request,response) => {
  response.sendFile('./imageUploadTest.html',{ root: '.' })
});

module.exports = router
