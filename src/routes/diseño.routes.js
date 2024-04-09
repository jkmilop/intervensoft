const { Router } = require("express");
const {
  addDiseño,
  getDiseños,
  updateDiseño,
  deleteDiseño,
  getDiseño,
} = require("../controllers/diseño.controller.js");

const router = Router();

router.post("/", addDiseño);
router.get("/", getDiseños);
router.put("/:id", updateDiseño);
router.delete("/:id", deleteDiseño);
router.get("/:id", getDiseño);

module.exports = router;
