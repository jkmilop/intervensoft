const ZonaEstructura = require('../models/zonaEstructura.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addZonaEstructura = addRecord(ZonaEstructura);
const getZonaEstructura = getRecord(ZonaEstructura);
const getZonasEstructura = getRecords(ZonaEstructura);
const updateZonaEstructura = updateRecord(ZonaEstructura);
const deleteZonaEstructura = deleteRecord(ZonaEstructura);

module.exports = {
  addZonaEstructura,
  getZonaEstructura,
  getZonasEstructura,
  updateZonaEstructura,
  deleteZonaEstructura,
};
