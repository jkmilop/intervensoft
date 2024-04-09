const { Router } = require("express");
const {
  addMaterialesEstructura,
  getMaterialesEstructura,
  updateMaterialesEstructura,
  deleteMaterialesEstructura,
  getMaterialesEstructuras,
} = require("../controllers/materialesEstructura.controller.js");

const router = Router();

router.post("/", addMaterialesEstructura);
router.get("/", getMaterialesEstructuras);
router.put("/:id", updateMaterialesEstructura);
router.delete("/:id", deleteMaterialesEstructura);
router.get("/:id", getMaterialesEstructura);

module.exports = router;
