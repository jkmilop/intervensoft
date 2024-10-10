const Diseño = require('../models/diseño.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addDiseño = addRecord(Diseño);
const getDiseño = getRecord(Diseño);
const getDiseños = getRecords(Diseño);
const updateDiseño = updateRecord(Diseño);
const deleteDiseño = deleteRecord(Diseño);

module.exports = {
  addDiseño,
  getDiseño,
  getDiseños,
  updateDiseño,
  deleteDiseño,
};
