const { Router } = require("express");
const {
  addResultado,
  getResultados,
  updateResultado,
  deleteResultado,
  getResultado,
} = require("../controllers/resultado.controller.js");

const router = Router();

router.post("/", addResultado);
router.get("/", getResultados);
router.put("/:id", updateResultado);
router.delete("/:id", deleteResultado);
router.get("/:id", getResultado);

module.exports = router;
