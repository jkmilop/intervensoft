const { Router } = require("express");
const {
  addUsuario,
  getUbicacionesEstructura,
  updateUsuario,
  deleteUsuario,
  getUsuario,
} = require("../controllers/usuario.controller.js");

const router = Router();

router.post("/", addUsuario);
router.get("/", getUbicacionesEstructura);
router.put("/:id", updateUsuario);
router.delete("/:id", deleteUsuario);
router.get("/:id", getUsuario);

module.exports = router;
