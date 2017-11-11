const router = require("express").Router();
const pokedexController = require("../../controllers/pokedexController.js");


router.route("/all")
    .get(pokedexController.findAll);

module.exports = router;