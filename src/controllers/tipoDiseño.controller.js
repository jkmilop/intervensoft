const TipoDiseño = require('../models/tipoDiseño.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addTipoDiseño = addRecord(TipoDiseño);
const getTipoDiseño = getRecord(TipoDiseño);
const getTiposDiseño = getRecords(TipoDiseño);
const updateTipoDiseño = updateRecord(TipoDiseño);
const deleteTipoDiseño = deleteRecord(TipoDiseño);

module.exports = {
  addTipoDiseño,
  getTipoDiseño,
  getTiposDiseño,
  updateTipoDiseño,
  deleteTipoDiseño,
};
