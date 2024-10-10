const { Router } = require("express");
const {
  addSeccion,
  getSeccions,
  updateSeccion,
  deleteSeccion,
  getSeccion,
} = require("../controllers/seccion.controller.js");

const router = Router();

router.post("/", addSeccion);
router.get("/", getSeccions);
router.put("/:id", updateSeccion);
router.delete("/:id", deleteSeccion);
router.get("/:id", getSeccion);

module.exports = router;
