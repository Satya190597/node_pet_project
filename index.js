const express = require('express')

const app = express()

const port = 8088

/*
  [Testing github-passport strategy]
  [START]
*/

  // [Import modules]
  const passport = require('passport')
  const configurePassport = require('./config/passportConfig')

  // [Configure passport]
  configurePassport.configureGithubStrategy(app)

  // [Login url]
  app.get('/auth/github',passport.authenticate('github'));

  // [Callback url]
  app.get('/auth/github/callback',passport.authenticate('github',{failureRedirect : '/auth/failed'}),function(request,response){
    console.log(`Unable To Get Profile Information -> ${request.user}`)
    response.status(200).json(request.user)    
  })

  // [User Profile]
  app.get('/profile',function(request,response){
    console.log(`------------- Inside The View Request Object -------------\n${request.user}`)
    response.status(200).json(request.user)
  })

  function checkLogin()
  {
    response.redirect('/auth/github/callback');
    next();
  }

/*
  [END]
*/


app.get('/', (request, response) => {
  response.status(200).json({ 'message': 'Welcome To My Application' })
})

app.listen(port, (request, response) => {
  console.log('Server Is Running')
})
