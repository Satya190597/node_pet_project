/*
    Import Modules : ['../config/multerConfig']
*/
const multerConfig = require('../config/multerConfig')
const multer = require('multer')

var uploadImage = (filedname) => {
  return multer({ storage: multerConfig.storage }, { limit: multerConfig.limits }).single(filedname)
}

module.exports = uploadImage
