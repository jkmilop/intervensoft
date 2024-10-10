const { Router } = require("express");
const {
  addCTActividadesEstructura,
  getCTActividadesEstructura,
  updateCTActividadesEstructura,
  deleteCTActividadesEstructura,
  getCTActividadesEstructuras,
} = require("../controllers/ctactividadesEstructura.controller.js");

const router = Router();

router.post("/", addCTActividadesEstructura);
router.get("/", getCTActividadesEstructuras);
router.put("/:id", updateCTActividadesEstructura);
router.delete("/:id", deleteCTActividadesEstructura);
router.get("/:id", getCTActividadesEstructura);

module.exports = router;
