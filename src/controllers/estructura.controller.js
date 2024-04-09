const Estructura = require('../models/estructura.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addEstructura = addRecord(Estructura);
const getEstructura = getRecord(Estructura);
const getEstructuras = getRecords(Estructura);
const updateEstructura = updateRecord(Estructura);
const deleteEstructura = deleteRecord(Estructura);

module.exports = {
  addEstructura,
  getEstructura,
  getEstructuras,
  updateEstructura,
  deleteEstructura,
};
