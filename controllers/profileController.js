const db = require("../models");

module.exports = {
    getUser: function(req, res) {
      db.User
      .find({})
      .sort({ highScore: -1}).then(result => res.json(result));
      
    },
    updateCookie: function(req, res) {
      // console.log(req.body.userCookie);
      // console.log(req.body.username);
      // res.json(req.body);
      db.User
      .findOneAndUpdate({ username: req.body.username }, {userCookie: req.body.userCookie})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },
    getHighScores: function(req, res){
      db.User
      .find({}).then(result => res.json(result));
    }
}