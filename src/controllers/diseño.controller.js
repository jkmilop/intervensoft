const Diseño = require('../models/diseño.js');
const TipoDiseño = require('../models/tipoDiseño.js');

const handleError = require('../utils/errorHandler.js');

const {
  addRecord,
  getRecordWithAssociations,
  getRecordsWithAssociations ,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addDiseño = addRecord(Diseño);
const getDiseño = getRecordWithAssociations(Diseño, [
  { model: TipoDiseño, attributes: ['nombre'], as: 'tipo_diseño' },
]);
const getDiseños = getRecordsWithAssociations(Diseño, [
  { model: TipoDiseño, attributes: ['nombre'], as: 'tipo_diseño' },
]);
const updateDiseño = updateRecord(Diseño);
const deleteDiseño = deleteRecord(Diseño);

module.exports = {
  addDiseño,
  getDiseño,
  getDiseños,
  updateDiseño,
  deleteDiseño,
};
