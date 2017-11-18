const router = require("express").Router();
const profileController = require('../../controllers//profileController');

router.route('/user')
  .get(profileController.getUser)
  .post(profileController.updateCookie)

module.exports = router;