const { Router } = require("express");
const {
  addReporte,
  getReportes,
  updateReporte,
  deleteReporte,
  getReporte,
} = require("../controllers/reporte.controller.js");

const router = Router();

router.post("/", addReporte);
router.get("/", getReportes);
router.put("/:id", updateReporte);
router.delete("/:id", deleteReporte);
router.get("/:id", getReporte);

module.exports = router;
