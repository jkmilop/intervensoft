const TipoEvaluacion = require('../models/tipoEvaluacion.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addTipoEvaluacion = addRecord(TipoEvaluacion);
const getTipoEvaluacion = getRecord(TipoEvaluacion);
const getTiposEvaluacion = getRecords(TipoEvaluacion);
const updateTipoEvaluacion = updateRecord(TipoEvaluacion);
const deleteTipoEvaluacion = deleteRecord(TipoEvaluacion);

module.exports = {
  addTipoEvaluacion,
  getTipoEvaluacion,
  getTiposEvaluacion,
  updateTipoEvaluacion,
  deleteTipoEvaluacion,
};
