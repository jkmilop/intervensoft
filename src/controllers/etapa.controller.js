const Etapa = require('../models/etapa.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addEtapa = addRecord(Etapa);
const getEtapa = getRecord(Etapa);
const getEtapas = getRecords(Etapa);
const updateEtapa = updateRecord(Etapa);
const deleteEtapa = deleteRecord(Etapa);

module.exports = {
  addEtapa,
  getEtapa,
  getEtapas,
  updateEtapa,
  deleteEtapa,
};
