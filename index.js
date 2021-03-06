/*
    Import Modules : ['express','./routes/testRoutes', 'jsonwebtoken' , './config']
*/
const express = require('express')
const routes = require('./routes/testRoutes')
const jwt = require('jsonwebtoken')
const config = require('./config')

const app = express()

const port = 8088

/*
  [Testing github-passport & jwt strategy]
  [START]
*/

  // [Import modules]
  const passport = require('passport')
  const configurePassport = require('./config/passportConfig')

  // [Configure passport]
  configurePassport.configureGithubStrategy(app)
  configurePassport.configureJwt()

  // [Login url]
  app.get('/auth/github',passport.authenticate('github'));

  // [Callback url]
  app.get('/auth/github/callback',passport.authenticate('github',{failureRedirect : '/auth/failed'}),function(request,response){
    response.status(200).json(request.user)
  })

  app.get('/auth/jwt/token',(request,response) => {
    let token = jwt.sign({ user : 'satya prakash nandy' },config.jwt.secret);
    response.status(200).json({token:token})
  })

  app.get('/auth/jwt/verify',passport.authenticate('jwt', { session : false }),(request,response) => {
    response.status(200).json({'user':request.user})
  })

/*
  [END]
*/

app.use(routes)

// [Default Route]

app.get('/', (request, response) => {
  response.status(200).json({ 'message': 'Welcome To My Application' })
})

app.listen(port, (request, response) => {
  console.log(`Server is running on port ${port} ...`)
})
