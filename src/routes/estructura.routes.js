const { Router } = require("express");
const {
  addEstructura,
  getEstructuras,
  updateEstructura,
  deleteEstructura,
  getEstructura,
  getPorcentajeEstructura,
  generarEstructuraYActividadesEstructura,
  getActividadesPorEstructura,
  getPorcentajesEstructuras,
  getReporte,
  mostrarActividadIniciada,  
} = require("../controllers/estructura.controller.js");

const router = Router();

// === Rutas Adicionales para Múltiples Estructuras con id_estado = 2 ===
router.get("/porcentajes", getPorcentajesEstructuras); // GET /estructura/porcentajes
router.get("/actividades", mostrarActividadIniciada); // GET /estructura/actividades

// === Rutas CRUD Básicas ===
router.post("/", addEstructura); // POST /estructura
router.get("/", getEstructuras); // GET /estructura
router.put("/:id", updateEstructura); // PUT /estructura/:id
router.delete("/:id", deleteEstructura); // DELETE /estructura/:id
router.get("/:id", getEstructura); // GET /estructura/:id

//
// === Rutas Adicionales para una Sola Estructura ===
router.get("/actividad/:id", mostrarActividadIniciada); // GET /estructura/:id/actividad
router.get("/reporte/:id", getReporte); // GET /estructura/:id/actividad

router.get("/porcentaje/:id", getPorcentajeEstructura); // GET /estructura/:id/porcentaje
router.get("/actividades/:id", getActividadesPorEstructura); // GET /estructura/:id/actividades
router.post("/generar/:id", generarEstructuraYActividadesEstructura); // POST /estructura/:id/generar

module.exports = router;
