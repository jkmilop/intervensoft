const { Router } = require("express");
const {
  addEmpresa,
  getEmpresas,
  updateEmpresa,
  deleteEmpresa,
  getEmpresa,
} = require("../controllers/empresa.controller.js");

const router = Router();

router.post("/", addEmpresa);
router.get("/", getEmpresas);
router.put("/:id", updateEmpresa);
router.delete("/:id", deleteEmpresa);
router.get("/:id", getEmpresa);

module.exports = router;
