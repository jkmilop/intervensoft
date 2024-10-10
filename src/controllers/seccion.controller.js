const Seccion = require('../models/seccion.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addSeccion = addRecord(Seccion);
const getSeccion = getRecord(Seccion);
const getSeccions = getRecords(Seccion);
const updateSeccion = updateRecord(Seccion);
const deleteSeccion = deleteRecord(Seccion);

module.exports = {
  addSeccion,
  getSeccion,
  getSeccions,
  updateSeccion,
  deleteSeccion,
};
