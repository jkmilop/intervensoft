const { Router } = require("express");
const {
  addEtapa,
  getEtapas,
  updateEtapa,
  deleteEtapa,
  getEtapa,
} = require("../controllers/etapa.controller.js");

const router = Router();

router.post("/", addEtapa);
router.get("/", getEtapas);
router.put("/:id", updateEtapa);
router.delete("/:id", deleteEtapa);
router.get("/:id", getEtapa);

module.exports = router;
