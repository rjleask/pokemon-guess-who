const db = require("../models");

module.exports = {
  getUser: function (req, res) {
    db.User.find({}).then(result => res.json(result));
  },
  updateCookie: function (req, res) {
    db.User
      .findOneAndUpdate({ username: req.body.username }, {userCookie: req.body.userCookie})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getHighScores: function (req, res) {
    db.User
      .find({}).sort({ highScore: -1}).limit(10).then(result => res.json(result));
  },
  getUniqueUser: function (req, res) {
    db.User
      .findOne({_id: req.session.passport.user})
      .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  updateGameWin: function (req, res) {
    console.log(req.body);
    db.User
      .findOneAndUpdate({ _id: req.body._id},
        {highScore: req.body.highScore,
        $push: {
          pokemon: req.body.pokemon
        }})
      .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

  }
};
