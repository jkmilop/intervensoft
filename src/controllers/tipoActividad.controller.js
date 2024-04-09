const TipoActividad = require('../models/tipoActividad.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addTipoActividad = addRecord(TipoActividad);
const getTipoActividad = getRecord(TipoActividad);
const getTiposActividad = getRecords(TipoActividad);
const updateTipoActividad = updateRecord(TipoActividad);
const deleteTipoActividad = deleteRecord(TipoActividad);

module.exports = {
  addTipoActividad,
  getTipoActividad,
  getTiposActividad,
  updateTipoActividad,
  deleteTipoActividad,
};
