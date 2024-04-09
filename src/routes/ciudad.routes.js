const { Router } = require("express");
const {
  addCiudad,
  getCiudades,
  updateCiudad,
  deleteCiudad,
  getCiudad,
} = require("../controllers/ciudad.controller.js");

const router = Router();

router.post("/", addCiudad);
router.get("/", getCiudades);
router.put("/:id", updateCiudad);
router.delete("/:id", deleteCiudad);
router.get("/:id", getCiudad);

module.exports = router;
