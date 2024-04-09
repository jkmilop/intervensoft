const { Router } = require("express");
const {
  addTipoActividad,
  getTiposActividad,
  updateTipoActividad,
  deleteTipoActividad,
  getTipoActividad,
} = require("../controllers/tipoActividad.controller.js");

const router = Router();

router.post("/", addTipoActividad);
router.get("/", getTiposActividad);
router.put("/:id", updateTipoActividad);
router.delete("/:id", deleteTipoActividad);
router.get("/:id", getTipoActividad);

module.exports = router;
