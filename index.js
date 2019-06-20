/*
    Import Modules : ['express','./routes/testRoutes']
*/
const express = require('express')
const routes = require('./routes/testRoutes')

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
    response.status(200).json(request.user)    
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
