const { Router } = require("express");
const {
  addActividad,
  getActividades,
  updateActividad,
  deleteActividad,
  getActividad,
} = require("../controllers/actividad.controller.js");

const router = Router();

router.post("/", addActividad);
router.get("/", getActividades);
router.put("/:id", updateActividad);
router.delete("/:id", deleteActividad);
router.get("/:id", getActividad);

module.exports = router;
