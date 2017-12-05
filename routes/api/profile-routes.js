const router = require("express").Router();
const profileController = require('../../controllers/profileController');

router.route('/user')
  .get(profileController.getUser)
  .post(profileController.updateCookie)


router.route("/all/highscore")
  .get(profileController.getHighScores)

router.route("/user/unique")
  .get(profileController.getUniqueUser)

router.route("/user/id")
  .post(profileController.updateGameWin)

module.exports = router;