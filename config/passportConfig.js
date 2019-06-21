/*
    Import Modules : ['passport','passport-github','../config','passport-jwt']
*/
const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy;
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
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
    },
    configureJwt : () => {
        passport.use(new JwtStrategy({
            jwtFromRequest : ExtractJwt.fromHeader('token'),
            secretOrKey : config.jwt.secret
        },function(jwt_payload,next){
            if(jwt_payload)
                return next(null,jwt_payload.user)
            else
                return next(null,false)
        }))
    }
}

module.exports = configurePassport;