const MaterialesEstructura = require('../models/materialesEstructura.js');
const Estructura = require('../models/estructura.js');
const MaterialConstruccion = require('../models/materialConstruccion.js');
const {
  addRecord,
  getRecordWithAssociations,
  getRecordsWithAssociations,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addMaterialesEstructura = addRecord(MaterialesEstructura);
const getMaterialesEstructura = getRecordWithAssociations(MaterialesEstructura, [
  { model: Estructura, attributes: ['nombre'], as: 'estructura' },
  { model: MaterialConstruccion, attributes: ['nombre'], as: 'material_construccion' },

]);
const getMaterialesEstructuras = getRecordsWithAssociations(MaterialesEstructura, [
  { model: Estructura, attributes: ['nombre'], as: 'estructura' },
  { model: MaterialConstruccion, attributes: ['nombre'], as: 'material_construccion' },

]);
const updateMaterialesEstructura = updateRecord(MaterialesEstructura);
const deleteMaterialesEstructura = deleteRecord(MaterialesEstructura);

module.exports = {
  addMaterialesEstructura,
  getMaterialesEstructuras,
  getMaterialesEstructura,
  updateMaterialesEstructura,
  deleteMaterialesEstructura,
};
