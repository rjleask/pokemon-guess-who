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
      .find({}).then(result => res.json(result));
  },
  getUniqueUser: function (req, res) {
    db.User
      .findOne({userCookie: req.params.cookie})
      .then(dbModel => res.json(dbModel)
        .catch(err => res.status(422).json(err)));
  }
};
