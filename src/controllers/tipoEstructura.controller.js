const TipoEstructura = require('../models/tipoEstructura.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addTipoEstructura = addRecord(TipoEstructura);
const getTipoEstructura = getRecord(TipoEstructura);
const getTiposEstructura = getRecords(TipoEstructura);
const updateTipoEstructura = updateRecord(TipoEstructura);
const deleteTipoEstructura = deleteRecord(TipoEstructura);

module.exports = {
  addTipoEstructura,
  getTipoEstructura,
  getTiposEstructura,
  updateTipoEstructura,
  deleteTipoEstructura,
};
