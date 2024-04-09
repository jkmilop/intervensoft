const TipoVivienda = require('../models/tipoVivienda.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addTipoVivienda = addRecord(TipoVivienda);
const getTipoVivienda = getRecord(TipoVivienda);
const getTiposVivienda = getRecords(TipoVivienda);
const updateTipoVivienda = updateRecord(TipoVivienda);
const deleteTipoVivienda = deleteRecord(TipoVivienda);

module.exports = {
  addTipoVivienda,
  getTipoVivienda,
  getTiposVivienda,
  updateTipoVivienda,
  deleteTipoVivienda,
};
