const Estructura = require('../models/estructura.js');
const Conjunto = require('../models/conjunto.js');
const TipoEstructura = require('../models/tipoEstructura.js');
const UbicacionEstructura = require('../models/ubicacionEstructura.js');

const handleError = require('../utils/errorHandler.js');

const {
  addRecord,
  getRecordWithAssociations,
  getRecordsWithAssociations,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addEstructura = addRecord(Estructura);
const getEstructura = getRecordWithAssociations(Estructura, [
  { model: Conjunto, attributes: ['nombre'], as: 'conjunto' },
  { model: TipoEstructura, attributes: ['nombre'], as: 'tipo_estructura' },
  { model: UbicacionEstructura, attributes: ['nombre'], as: 'ubicacion_estructura' },

]);
const getEstructuras = getRecordsWithAssociations(Estructura, [
  { model: Conjunto, attributes: ['nombre'], as: 'conjunto' },
  { model: TipoEstructura, attributes: ['nombre'], as: 'tipo_estructura' },
  { model: UbicacionEstructura, attributes: ['nombre'], as: 'ubicacion_estructura' },

]);
const updateEstructura = updateRecord(Estructura);
const deleteEstructura = deleteRecord(Estructura);

module.exports = {
  addEstructura,
  getEstructura,
  getEstructuras,
  updateEstructura,
  deleteEstructura,
};
