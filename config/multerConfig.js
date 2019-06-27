/*
    Import modules
*/
const multer = require('multer')

var configureMulter = {
    storage: multer.diskStorage({
        destination : (request,file,next) => {
            next(null,'./images')
        },
        filename : (request,file,next) => {
            next(null,file.fieldname+'-'+Date.now())
        }
    }),
    limits: {
        files: 5,
        fileSize: 5242880
    }
}

module.exports = configureMulter
    

