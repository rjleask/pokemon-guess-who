const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username:String,
  googleId:String,
  userCookie:String,
  highScore:{
    type: Number,
    default: 0
  },
  pokemon: {
    type: []
  }
})

const User = mongoose.model('user', userSchema);

module.exports = User;