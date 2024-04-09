const { Router } = require("express");
const {
  addZona,
  getZonas,
  updateZona,
  deleteZona,
  getZona,
} = require("../controllers/zona.controller.js");

const router = Router();

router.post("/", addZona);
router.get("/", getZonas);
router.put("/:id", updateZona);
router.delete("/:id", deleteZona);
router.get("/:id", getZona);

module.exports = router;
