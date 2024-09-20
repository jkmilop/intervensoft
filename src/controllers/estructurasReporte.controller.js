const EstructurasReporte = require('../models/estructurasReporte.js');
const Estructura = require('../models/estructura.js');
const Reporte = require('../models/reporte.js');

const {
  addRecord,
  getRecordWithAssociations,
  getRecordsWithAssociations ,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const getEstructurasReporte = getRecordWithAssociations(EstructurasReporte, [
  { model: Estructura, attributes: ['nombre'], as: 'estructura' },
  { model: Reporte, attributes: ['descripcion_reporte'], as: 'reporte' },
]);
const getEstructurasReportes = getRecordsWithAssociations(EstructurasReporte, [
  { model: Estructura, attributes: ['nombre'], as: 'estructura' },
  { model: Reporte, attributes: ['descripcion_reporte'], as: 'reporte' },
]);
const addEstructurasReporte = addRecord(EstructurasReporte);
const updateEstructurasReporte = updateRecord(EstructurasReporte);
const deleteEstructurasReporte = deleteRecord(EstructurasReporte);

module.exports = {
  addEstructurasReporte,
  getEstructurasReporte,
  getEstructurasReportes,
  updateEstructurasReporte,
  deleteEstructurasReporte,
};
