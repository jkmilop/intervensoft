const express = require('express');
const router = express.Router();
const { calcularPorcentajeActividadesCompletadas, getEstadoEstructura } = require("../controllers/dashboardController.js");

router.get('/estructura/:idEstructura/estado', getEstadoEstructura);
router.get('/estructura/:idEstructura/porcentaje', calcularPorcentajeActividadesCompletadas);

module.exports = router;