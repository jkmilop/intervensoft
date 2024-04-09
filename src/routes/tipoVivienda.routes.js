const { Router } = require("express");
const {
  addTipoVivienda,
  getTiposVivienda,
  updateTipoVivienda,
  deleteTipoVivienda,
  getTipoVivienda,
} = require("../controllers/tipoVivienda.controller.js");

const router = Router();

router.post("/", addTipoVivienda);
router.get("/", getTiposVivienda);
router.put("/:id", updateTipoVivienda);
router.delete("/:id", deleteTipoVivienda);
router.get("/:id", getTipoVivienda);

module.exports = router;
