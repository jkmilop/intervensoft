const { Router } = require("express");
const {
  addEstructura,
  getEstructuras,
  updateEstructura,
  deleteEstructura,
  getEstructura,
} = require("../controllers/estructura.controller.js");

const router = Router();

router.post("/", addEstructura);
router.get("/", getEstructuras);
router.put("/:id", updateEstructura);
router.delete("/:id", deleteEstructura);
router.get("/:id", getEstructura);

module.exports = router;
