const { Router } = require("express");
const {
  addTitulo,
  getTitulos,
  updateTitulo,
  deleteTitulo,
  getTitulo,
} = require("../controllers/titulo.controller.js");

const router = Router();

router.post("/", addTitulo);
router.get("/", getTitulos);
router.put("/:id", updateTitulo);
router.delete("/:id", deleteTitulo);
router.get("/:id", getTitulo);

module.exports = router;
