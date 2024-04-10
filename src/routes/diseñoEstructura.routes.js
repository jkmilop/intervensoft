const { Router } = require("express");
const {
  addDiseñoEstructura,
  getDiseñoEstructuras,
  updateDiseñoEstructura,
  deleteDiseñoEstructura,
  getDiseñoEstructura,
} = require("../controllers/diseñoEstructura.controller.js");

const router = Router();

router.post("/", addDiseñoEstructura);
router.get("/", getDiseñoEstructuras);
router.put("/:id", updateDiseñoEstructura);
router.delete("/:id", deleteDiseñoEstructura);
router.get("/:id", getDiseñoEstructura);

module.exports = router;
