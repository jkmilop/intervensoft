const MaterialConstruccion = require('../models/materialConstruccion.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addMaterialConstruccion = addRecord(MaterialConstruccion);
const getMaterialConstruccion = getRecord(MaterialConstruccion);
const getMaterialesConstruccion = getRecords(MaterialConstruccion);
const updateMaterialConstruccion = updateRecord(MaterialConstruccion);
const deleteMaterialConstruccion = deleteRecord(MaterialConstruccion);

module.exports = {
  addMaterialConstruccion,
  getMaterialConstruccion,
  getMaterialesConstruccion,
  updateMaterialConstruccion,
  deleteMaterialConstruccion,
};
