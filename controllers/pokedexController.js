const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Pokedex
      .find({})
      .sort({ pokeId: 1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  startGame: function (req, res) {
    db.Pokedex
      .find({})
      .sort({ pokeId: 1})
      .then(dbModel => {
        let indexArray = [];
        let pokeArray = [];

        while (indexArray.length < req.params.num) {
          let randomnumber = Math.ceil(Math.random() * (dbModel.length - 1));
          if (indexArray.indexOf(randomnumber) > -1) continue;
          indexArray[indexArray.length] = randomnumber;
        }

        for (let i = 0; i < indexArray.length; i++) {
          pokeArray.push(dbModel[indexArray[i]]);
        }

        res.json(pokeArray);
      })
      .catch(err => res.status(423).json(err));
  }
};
