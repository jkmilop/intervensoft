const { Router } = require("express");
const {
  addTipoDiseño,
  getTiposDiseño,
  updateTipoDiseño,
  deleteTipoDiseño,
  getTipoDiseño,
} = require("../controllers/tipoDiseño.controller.js");

const router = Router();

router.post("/", addTipoDiseño);
router.get("/", getTiposDiseño);
router.put("/:id", updateTipoDiseño);
router.delete("/:id", deleteTipoDiseño);
router.get("/:id", getTipoDiseño);

module.exports = router;
