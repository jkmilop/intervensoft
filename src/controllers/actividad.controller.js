const Actividad = require('../models/actividad.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addActividad = addRecord(Actividad);
const getActividad = getRecord(Actividad);
const getActividades = getRecords(Actividad);
const updateActividad = updateRecord(Actividad);
const deleteActividad = deleteRecord(Actividad);

module.exports = {
  addActividad,
  getActividad,
  getActividades,
  updateActividad,
  deleteActividad,
};
