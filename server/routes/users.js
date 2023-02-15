const router = require('express').Router();
const controller = require('../controllers/users');
const jwtauth = require("../middlewares/jwtauth");

router.post("/register", controller.register);
router.post("/login", controller.login);
router.get("/is_logged_in", jwtauth.jwtauth, controller.is_logged_in);
router.get("/get_user", jwtauth.jwtauth, controller.get_user);
router.post("/edit_creds", jwtauth.jwtauth, controller.edit_creds);
router.post("/save_data", jwtauth.jwtauth, controller.save_user_data);



module.exports = router;