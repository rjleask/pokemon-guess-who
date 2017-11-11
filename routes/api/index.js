const router = require("express").Router();
const pokedexRoutes = require("./pokedex");

router.use("/pokedex", pokedexRoutes);

module.exports = router;
