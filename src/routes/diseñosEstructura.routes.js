const { Router } = require("express");
const {
  addDiseñosEstructura,
  getDiseñosEstructuras,
  updateDiseñosEstructura,
  deleteDiseñosEstructura,
  getDiseñosEstructura,
} = require("../controllers/diseñosEstructura.controller.js");

const router = Router();

router.post("/", addDiseñosEstructura);
router.get("/", getDiseñosEstructuras);
router.put("/:id", updateDiseñosEstructura);
router.delete("/:id", deleteDiseñosEstructura);
router.get("/:id", getDiseñosEstructura);

module.exports = router;
