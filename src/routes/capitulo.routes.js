const { Router } = require("express");
const {
  addCapitulo,
  getCapitulos,
  updateCapitulo,
  deleteCapitulo,
  getCapitulo,
} = require("../controllers/capitulo.controller.js");

const router = Router();

router.post("/", addCapitulo);
router.get("/", getCapitulos);
router.put("/:id", updateCapitulo);
router.delete("/:id", deleteCapitulo);
router.get("/:id", getCapitulo);

module.exports = router;
