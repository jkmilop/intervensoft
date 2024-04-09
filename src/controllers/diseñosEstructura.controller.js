const DiseñosEstructura = require('../models/diseñosEstructura.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addDiseñosEstructura = addRecord(DiseñosEstructura);
const getDiseñosEstructura = getRecord(DiseñosEstructura);
const getDiseñosEstructuras = getRecords(DiseñosEstructura);
const updateDiseñosEstructura = updateRecord(DiseñosEstructura);
const deleteDiseñosEstructura = deleteRecord(DiseñosEstructura);

module.exports = {
  addDiseñosEstructura,
  getDiseñosEstructura,
  getDiseñosEstructuras,
  updateDiseñosEstructura,
  deleteDiseñosEstructura,
};
