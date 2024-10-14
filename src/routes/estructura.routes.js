const { Router } = require("express");
const {
  addEstructura,
  getEstructuras,
  updateEstructura,
  deleteEstructura,
  getEstructura,
  getPorcentajeEstructura,
  getEstadoEstructura,
  generarEstructuraYActividadesEstructura
} = require("../controllers/estructura.controller.js");

const router = Router();

router.post("/", addEstructura);
router.get("/", getEstructuras);
router.put("/:id", updateEstructura);
router.delete("/:id", deleteEstructura);
router.get("/:id", getEstructura);
router.get('/:id/estado', getEstadoEstructura);
router.get('/:id/porcentaje', getPorcentajeEstructura );
router.post("/:id/generar", generarEstructuraYActividadesEstructura);

module.exports = router;
