const EstructurasReporte = require('../models/estructurasReporte.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addEstructurasReporte = addRecord(EstructurasReporte);
const getEstructurasReporte = getRecord(EstructurasReporte);
const getEstructurasReportes = getRecords(EstructurasReporte);
const updateEstructurasReporte = updateRecord(EstructurasReporte);
const deleteEstructurasReporte = deleteRecord(EstructurasReporte);

module.exports = {
  addEstructurasReporte,
  getEstructurasReporte,
  getEstructurasReportes,
  updateEstructurasReporte,
  deleteEstructurasReporte,
};
