const Titulo = require('../models/titulo.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addTitulo = addRecord(Titulo);
const getTitulo = getRecord(Titulo);
const getTitulos = getRecords(Titulo);
const updateTitulo = updateRecord(Titulo);
const deleteTitulo = deleteRecord(Titulo);

module.exports = {
  addTitulo,
  getTitulo,
  getTitulos,
  updateTitulo,
  deleteTitulo,
};
