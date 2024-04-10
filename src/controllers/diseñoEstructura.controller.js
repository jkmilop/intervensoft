const DiseñoEstructura = require('../models/diseñoEstructura.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addDiseñoEstructura = addRecord(DiseñoEstructura);
const getDiseñoEstructura = getRecord(DiseñoEstructura);
const getDiseñoEstructuras = getRecords(DiseñoEstructura);
const updateDiseñoEstructura = updateRecord(DiseñoEstructura);
const deleteDiseñoEstructura = deleteRecord(DiseñoEstructura);

module.exports = {
  addDiseñoEstructura,
  getDiseñoEstructura,
  getDiseñoEstructuras,
  updateDiseñoEstructura,
  deleteDiseñoEstructura,
};
