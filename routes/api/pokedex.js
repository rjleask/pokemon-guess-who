const router = require("express").Router();
const pokedexController = require("../../controllers/pokedexController.js");

router.route("/all")
  .get(pokedexController.findAll);

router.route("/game/start/:num")
  .get(pokedexController.startGame);

module.exports = router;
