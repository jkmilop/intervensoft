const Estado = require('../models/estado.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addEstado = addRecord(Estado);
const getEstado = getRecord(Estado);
const getTiposEstructura = getRecords(Estado);
const updateEstado = updateRecord(Estado);
const deleteEstado = deleteRecord(Estado);

module.exports = {
  addEstado,
  getEstado,
  getTiposEstructura,
  updateEstado,
  deleteEstado,
};
