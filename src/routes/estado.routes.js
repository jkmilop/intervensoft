const { Router } = require("express");
const {
  addEstado,
  getEstados,
  updateEstado,
  deleteEstado,
  getEstado,
} = require("../controllers/estado.controller.js");

const router = Router();

router.post("/", addEstado);
router.get("/", getEstados);
router.put("/:id", updateEstado);
router.delete("/:id", deleteEstado);
router.get("/:id", getEstado);

module.exports = router;
