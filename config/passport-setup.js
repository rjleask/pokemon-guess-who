const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
let keys;
const User = require('../models/users');
let google_client;
let google_secret;
let url;
let heroku = false;
if(heroku){
  google_client=ENV['GOOGLE_CLIENT_ID'];
  google_secret=ENV['GOOGLE_CLIENT_SECRET'];
  url = 'https://calm-hamlet-36261.herokuapp.com/api/auth/google/redirect';
  
}else{
    keys = require('./keys');
    google_client=keys.google.clientID;
    google_secret=keys.google.clientSecret;
    url = 'http://localhost:3001/api/auth/google/redirect';
}

// user info that gets put into the cookie, takes in current/new user
passport.serializeUser((user, done) =>{
  done(null,user.id);
});
// when the cookie comes back from the browser find the user with that id
// then pass on the user
passport.deserializeUser((id, done) =>{
  User.findById(id).then((user) => {
  done(null,user);
  })
});
passport.use(
  new GoogleStrategy({
      // options for google strategy
      clientID: google_client,
      clientSecret: google_secret,
      // this has to match callback in google project settings as well
      callbackURL: url
  }, (accessToken, refreshToken, profile, done) => {
      // check if user already exists
      User.findOne({googleId:profile.id}).then((currentUser) =>{
        if(currentUser){
            // already exists
            console.log("user exists: " + currentUser);
            // pass in current user to be serialized in the serliazeUser func
            done(null,currentUser);
        }else{
            // if not add new user
            // makes new user and saves it to our database
            new User ({
                username:profile.displayName,
                googleId:profile.id,
                highScore:0
            }).save().then((newUser) => {
                console.log('new user created: '+ newUser);
                done(null,newUser);
            })
        }
    })
    
  })
);
