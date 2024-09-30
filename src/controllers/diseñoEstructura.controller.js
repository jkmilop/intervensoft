const DiseñoEstructura = require('../models/diseñoEstructura.js');
const Diseño = require('../models/diseño.js');
const Estructura = require('../models/estructura.js');

const {
  addRecord,
  getRecordWithAssociations,
  getRecordsWithAssociations,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addDiseñoEstructura = addRecord(DiseñoEstructura);
const getDiseñoEstructura = getRecordWithAssociations(DiseñoEstructura, [
  { model: Diseño, attributes: ['nombre'], as: 'diseño' },
  { model: Estructura, attributes: ['nombre'], as: 'estructura' },
]);
const getDiseñoEstructuras = getRecordsWithAssociations(DiseñoEstructura, [
  { model: Diseño, attributes: ['descripcion_diseño'], as: 'diseño' },
  { model: Estructura, attributes: ['nombre'], as: 'estructura' },

]);
const updateDiseñoEstructura = updateRecord(DiseñoEstructura);
const deleteDiseñoEstructura = deleteRecord(DiseñoEstructura);

module.exports = {
  addDiseñoEstructura,
  getDiseñoEstructura,
  getDiseñoEstructuras,
  updateDiseñoEstructura,
  deleteDiseñoEstructura,
};
