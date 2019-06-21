/*
    Import Modules : ['passport','passport-github','../config']
*/
const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy;
const config = require('../config')

var configurePassport = {
    configureGithubStrategy : (app) => {

        // STEP 1 : [Initialize passport into the app]

        app.use(passport.initialize())
        app.use(passport.session()); 

        // STEP 2 : [Implement serialize and deserialize objects of passport]

        passport.serializeUser(function(profile,done){
            
            done(null,profile);
        })

        passport.deserializeUser(function(profile,done){
            done(null,profile);
        })

        // STEP 3 : [Configure GitHub Strategy]

        passport.use(new GitHubStrategy({
            clientID: config.gitHub.clientID,
            clientSecret: config.gitHub.clientSecret,
            callbackURL: config.gitHub.callbackURL
          },
          function(accessToken, refreshToken, profile, done) {
            console.log(accessToken)
            done(null,profile)
          }
        ));
    }
}

module.exports = configurePassport;