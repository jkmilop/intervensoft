const Reporte = require('../models/reporte.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addReporte = addRecord(Reporte);
const getReporte = getRecord(Reporte);
const getReportes = getRecords(Reporte);
const updateReporte = updateRecord(Reporte);
const deleteReporte = deleteRecord(Reporte);

module.exports = {
  addReporte,
  getReporte,
  getReportes,
  updateReporte,
  deleteReporte,
};
