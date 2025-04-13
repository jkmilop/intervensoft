const { Router } = require("express");
const {
  addEstructura,
  getEstructura,
  getEstructuras,
  deleteEstructura,
  generarEstructuraYActividadesEstructura,
  getPorcentajeEstructura,
  getPorcentajeConjunto,
  getPorcentajeProyecto,

  handleUpdateActividadEstructura,
  updateEstructura,
} = require("../controllers/estructura.controller.js");

const router = Router();
router.post("/", addEstructura); // POST /estructura
router.get("/", getEstructuras); // GET /estructura
router.put("/:id", updateEstructura); // PUT /estructura/:id
router.delete("/:id", deleteEstructura); // DELETE /estructura/:id
router.get("/:id", getEstructura); // GET /estructura/:id
router.get("/porcentaje/:id", getPorcentajeEstructura); // GET /estructura/:id/porcentaje
router.get("/porcentajeP/:id", getPorcentajeProyecto); // GET /estructura/:id/porcentaje
router.get("/porcentajeC/:id", getPorcentajeConjunto); // GET /estructura/:id/porcentaje

router.post("/generar/:id", generarEstructuraYActividadesEstructura); // POST /estructura/:id/generar
router.put("/handleUpdateActividadEstructura/:id", handleUpdateActividadEstructura); // PUT /estructura/:id

module.exports = router;
