const Actividad = require('../models/actividad.js');
const Etapa = require('../models/etapa.js');
const TipoActividad = require('../models/tipoActividad.js');
const Seccion = require('../models/seccion.js');
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
  { model: TipoActividad, attributes: ['nombre'], as: 'tipo_actividad' },
  { model: Seccion, attributes: ['nombre'], as: 'seccion' },
]);
const getActividades = getRecordsWithAssociations(Actividad, [
  { model: Etapa, attributes: ['nombre'], as: 'etapa' },
  { model: TipoActividad, attributes: ['nombre'], as: 'tipo_actividad' },
  { model: Seccion, attributes: ['nombre'], as: 'seccion' },
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
