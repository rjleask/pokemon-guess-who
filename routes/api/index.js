const router = require("express").Router();
const pokedexRoutes = require("./pokedex");
const authRoutes = require("./auth-routes");
const profileRoutes = require("./profile-routes");

router.use("/pokedex", pokedexRoutes);
router.use("/auth", authRoutes);
router.use("/profile", profileRoutes);


module.exports = router;
