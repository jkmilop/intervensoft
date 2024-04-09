const UbicacionEstructura = require('../models/ubicacionEstructura.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addUbicacionEstructura = addRecord(UbicacionEstructura);
const getUbicacionEstructura = getRecord(UbicacionEstructura);
const getUbicacionesEstructura = getRecords(UbicacionEstructura);
const updateUbicacionEstructura = updateRecord(UbicacionEstructura);
const deleteUbicacionEstructura = deleteRecord(UbicacionEstructura);

module.exports = {
  addUbicacionEstructura,
  getUbicacionEstructura,
  getUbicacionesEstructura,
  updateUbicacionEstructura,
  deleteUbicacionEstructura,
};
