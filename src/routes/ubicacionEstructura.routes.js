const { Router } = require("express");
const {
  addUbicacionEstructura,
  getUbicacionesEstructura,
  updateUbicacionEstructura,
  deleteUbicacionEstructura,
  getUbicacionEstructura,
} = require("../controllers/ubicacionEstructura.controller.js");

const router = Router();

router.post("/", addUbicacionEstructura);
router.get("/", getUbicacionesEstructura);
router.put("/:id", updateUbicacionEstructura);
router.delete("/:id", deleteUbicacionEstructura);
router.get("/:id", getUbicacionEstructura);

module.exports = router;
