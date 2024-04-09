const { Router } = require("express");
const {
  addRol,
  getRoles,
  updateRol,
  deleteRol,
  getRol,
} = require("../controllers/rol.controller.js");

const router = Router();

router.post("/", addRol);
router.get("/", getRoles);
router.put("/:id", updateRol);
router.delete("/:id", deleteRol);
router.get("/:id", getRol);

module.exports = router;
