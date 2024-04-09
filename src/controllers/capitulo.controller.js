const Capitulo = require('../models/capitulo.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addCapitulo = addRecord(Capitulo);
const getCapitulo = getRecord(Capitulo);
const getCapitulos = getRecords(Capitulo);
const updateCapitulo = updateRecord(Capitulo);
const deleteCapitulo = deleteRecord(Capitulo);

module.exports = {
  addCapitulo,
  getCapitulo,
  getCapitulos,
  updateCapitulo,
  deleteCapitulo,
};
