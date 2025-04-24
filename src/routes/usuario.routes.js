const { Router } = require("express");
const {
  register,
  login,
  logout,
} = require("../controllers/usuario.controller.js");
const hasRole = require('../middlewares/authMiddleware.js');

const router = Router();

router.post("/register", hasRole('1', '4'), register);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;