const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
let keys;
const cookieSession = require('cookie-session');
// const passport = require('passport');
// const passportSetup = require('./config/passport-setup');





app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));
// encrypt cookie
let cook;
let heroku = true;
if(heroku){
  cook=process.env.COOKIE_KEY;
}else{
  keys = require('./config/keys');
  cook=keys.session.cookieKey;
}
app.use(cookieSession({
  // cookie expires after a day
  name:'user',
  maxAge:24*60*60*1000,
  keys: [cook],
  httpOnly:false
}))

// initialize passport
// app.use(passport.initialize());
// app.use(passport.session());
// routes
app.use(routes);

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pokemonguesswhodb",
  {
    useMongoClient: true
  }
);

app.listen(PORT, function () {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
