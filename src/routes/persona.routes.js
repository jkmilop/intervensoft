const { Router } = require("express");
const {
  addPersona,
  getPersonas,
  updatePersona,
  deletePersona,
  getPersona,
  revisarCedula,
} = require("../controllers/persona.controller.js");

const router = Router();

router.post("/", addPersona);
router.get("/", getPersonas);
router.put("/:id", updatePersona);
router.delete("/:id", deletePersona);
router.get("/:id", getPersona);
router.get("/verificar-rol/:cedula", revisarCedula);

module.exports = router;
