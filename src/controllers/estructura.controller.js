const Estructura = require('../models/estructura.js');
const Conjunto = require('../models/conjunto.js');
const handleError = require('../utils/errorHandler.js');

const {
  addRecord,
  getRecordWithAssociations,
  getRecordsWithAssociations ,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addEstructura = addRecord(Estructura);
const getEstructura = getRecordWithAssociations(Estructura, [
  { model: Conjunto, attributes: ['nombre'], as: 'conjunto' },
]);
const getEstructuras = getRecordsWithAssociations(Estructura, [
  { model: Conjunto, attributes: ['nombre'], as: 'conjunto' },
]);
const updateEstructura = updateRecord(Estructura);
const deleteEstructura = deleteRecord(Estructura);

module.exports = {
  addEstructura,
  getEstructura,
  getEstructuras,
  updateEstructura,
  deleteEstructura,
};
