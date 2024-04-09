const { Router } = require("express");
const {
  addTipoEstructura,
  getTiposEstructura,
  updateTipoEstructura,
  deleteTipoEstructura,
  getTipoEstructura,
} = require("../controllers/tipoEstructura.controller.js");

const router = Router();

router.post("/", addTipoEstructura);
router.get("/", getTiposEstructura);
router.put("/:id", updateTipoEstructura);
router.delete("/:id", deleteTipoEstructura);
router.get("/:id", getTipoEstructura);

module.exports = router;
