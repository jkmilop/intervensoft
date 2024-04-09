const { Router } = require("express");
const {
  addConjunto,
  getConjuntos,
  updateConjunto,
  deleteConjunto,
  getConjunto,
} = require("../controllers/conjunto.controller.js");

const router = Router();

router.post("/", addConjunto);
router.get("/", getConjuntos);
router.put("/:id", updateConjunto);
router.delete("/:id", deleteConjunto);
router.get("/:id", getConjunto);

module.exports = router;
