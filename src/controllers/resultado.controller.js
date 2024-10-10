const Resultado = require('../models/resultado.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addResultado = addRecord(Resultado);
const getResultado = getRecord(Resultado);
const getResultados = getRecords(Resultado);
const updateResultado = updateRecord(Resultado);
const deleteResultado = deleteRecord(Resultado);

module.exports = {
  addResultado,
  getResultado,
  getResultados,
  updateResultado,
  deleteResultado,
};
