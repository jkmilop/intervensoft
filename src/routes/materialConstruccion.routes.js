const { Router } = require("express");
const {
  addMaterialConstruccion,
  getMaterialesConstruccion,
  updateMaterialConstruccion,
  deleteMaterialConstruccion,
  getMaterialConstruccion,
} = require("../controllers/materialConstruccion.controller.js");

const router = Router();

router.post("/", addMaterialConstruccion);
router.get("/", getMaterialesConstruccion);
router.put("/:id", updateMaterialConstruccion);
router.delete("/:id", deleteMaterialConstruccion);
router.get("/:id", getMaterialConstruccion);

module.exports = router;
