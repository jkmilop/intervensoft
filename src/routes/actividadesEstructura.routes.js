const { Router } = require("express");
const {
  addActividadesEstructura,
  getActividadesEstructura,
  updateActividadesEstructura,
  deleteActividadesEstructura,
  getActividadesEstructuras,
} = require("../controllers/actividadesEstructura.controller.js");

const router = Router();

router.post("/", addActividadesEstructura);
router.get("/", getActividadesEstructuras);
router.put("/:id", updateActividadesEstructura);
router.delete("/:id", deleteActividadesEstructura);
router.get("/:id", getActividadesEstructura);

module.exports = router;
