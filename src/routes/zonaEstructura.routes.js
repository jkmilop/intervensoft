const { Router } = require("express");
const {
  addZonaEstructura,
  getZonasEstructura,
  updateZonaEstructura,
  deleteZonaEstructura,
  getZonaEstructura,
} = require("../controllers/zonaEstructura.controller.js");

const router = Router();

router.post("/", addZonaEstructura);
router.get("/", getZonasEstructura);
router.put("/:id", updateZonaEstructura);
router.delete("/:id", deleteZonaEstructura);
router.get("/:id", getZonaEstructura);

module.exports = router;
