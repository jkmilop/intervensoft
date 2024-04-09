const { Router } = require("express");
const {
  addProyecto,
  getProyectos,
  updateProyecto,
  deleteProyecto,
  getProyecto,
} = require("../controllers/proyecto.controller.js");

const router = Router();

router.post("/", addProyecto);
router.get("/", getProyectos);
router.put("/:id", updateProyecto);
router.delete("/:id", deleteProyecto);
router.get("/:id", getProyecto);

module.exports = router;
