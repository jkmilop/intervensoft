const Conjunto = require('../models/conjunto.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addConjunto = addRecord(Conjunto);
const getConjunto = getRecord(Conjunto);
const getConjuntos = getRecords(Conjunto);
const updateConjunto = updateRecord(Conjunto);
const deleteConjunto = deleteRecord(Conjunto);

module.exports = {
  addConjunto,
  getConjunto,
  getConjuntos,
  updateConjunto,
  deleteConjunto,
};
