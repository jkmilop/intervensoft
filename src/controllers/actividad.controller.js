const Actividad = require('../models/actividad.js');
const Etapa = require('../models/etapa.js');
const TipoActividad = require('../models/tipoActividad.js');
const handleError = require('../utils/errorHandler.js');

const {
  addRecord,
  updateRecord,
  deleteRecord,
  getRecordWithAssociations,
  getRecordsWithAssociations ,
} = require('./crudController.js');

const addActividad = addRecord(Actividad);
const getActividad = getRecordWithAssociations(Actividad, [
  { model: Etapa, attributes: ['nombre'], as: 'etapa' },
  { model: TipoActividad, attributes: ['actividad'], as: 'tipo_actividad' },
]);
const getActividades = getRecordsWithAssociations(Actividad, [
  { model: Etapa, attributes: ['nombre'], as: 'etapa' },
  { model: TipoActividad, attributes: ['actividad'], as: 'tipo_actividad' },
]);
const updateActividad = updateRecord(Actividad);
const deleteActividad = deleteRecord(Actividad);

module.exports = {
  addActividad,
  getActividad,
  getActividades,
  updateActividad,
  deleteActividad,
};
