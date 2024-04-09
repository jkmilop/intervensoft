const { Router } = require("express");
const {
  addEstructurasReporte,
  getEstructurasReporte,
  updateEstructurasReporte,
  deleteEstructurasReporte,
  getEstructurasReportes,
} = require("../controllers/estructurasReporte.controller.js");

const router = Router();

router.post("/", addEstructurasReporte);
router.get("/", getEstructurasReportes);
router.put("/:id", updateEstructurasReporte);
router.delete("/:id", deleteEstructurasReporte);
router.get("/:id", getEstructurasReporte);

module.exports = router;
