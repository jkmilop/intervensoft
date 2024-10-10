const { Router } = require("express");
const {
  addTipoEvaluacion,
  getTiposEvaluacion,
  updateTipoEvaluacion,
  deleteTipoEvaluacion,
  getTipoEvaluacion,
} = require("../controllers/tipoEvaluacion.controller.js");

const router = Router();

router.post("/", addTipoEvaluacion);
router.get("/", getTiposEvaluacion);
router.put("/:id", updateTipoEvaluacion);
router.delete("/:id", deleteTipoEvaluacion);
router.get("/:id", getTipoEvaluacion);

module.exports = router;
