const router = require("express").Router();
const profileController = require('../../controllers/profileController');

router.route('/user')
  .get(profileController.getUser)
  .post(profileController.updateCookie)
  .get(profileController.getHighScores)

router.route("/user/:cookie")
  .get(profileController.getUniqueUser)

module.exports = router;