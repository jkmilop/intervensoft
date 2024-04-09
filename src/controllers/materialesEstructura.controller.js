const MaterialesEstructura = require('../models/materialesEstructura.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addMaterialesEstructura = addRecord(MaterialesEstructura);
const getMaterialesEstructura = getRecord(MaterialesEstructura);
const getMaterialesEstructuras = getRecords(MaterialesEstructura);
const updateMaterialesEstructura = updateRecord(MaterialesEstructura);
const deleteMaterialesEstructura = deleteRecord(MaterialesEstructura);

module.exports = {
  addMaterialesEstructura,
  getMaterialesEstructuras,
  getMaterialesEstructura,
  updateMaterialesEstructura,
  deleteMaterialesEstructura,
};
