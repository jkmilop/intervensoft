const ZonaEstructura = require('../models/zonaEstructura.js');
const Zona = require('../models/zona.js');
const Estructura = require('../models/estructura.js');

const {
  addRecord,
  getRecordWithAssociations,
  getRecordsWithAssociations,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addZonaEstructura = addRecord(ZonaEstructura);
const getZonaEstructura = getRecordWithAssociations(ZonaEstructura, [
  { model: Zona, attributes: ['nombre'], as: 'zona' },
  { model: Estructura, attributes: ['nombre'], as: 'estructura' },

]);
const getZonasEstructura = getRecordsWithAssociations(ZonaEstructura, [
  { model: Zona, attributes: ['nombre'], as: 'zona' },
  { model: Estructura, attributes: ['nombre'], as: 'estructura' },

]);
const updateZonaEstructura = updateRecord(ZonaEstructura);
const deleteZonaEstructura = deleteRecord(ZonaEstructura);

module.exports = {
  addZonaEstructura,
  getZonaEstructura,
  getZonasEstructura,
  updateZonaEstructura,
  deleteZonaEstructura,
};
