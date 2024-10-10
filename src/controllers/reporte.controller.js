const Reporte = require('../models/reporte.js');
const Estado = require('../models/estado.js');

const Persona = require('../models/persona.js');
const ActividadesEstructura = require('../models/actividadesEstructura.js');


const handleError = require('../utils/errorHandler.js');

const {
  addRecord,
  getRecordWithAssociations,
  getRecordsWithAssociations ,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addReporte = addRecord(Reporte);
const getReporte = getRecordWithAssociations(Reporte, [
  { model: Persona, attributes: ['nombre'], as: 'interventor' },
  { model: Persona, attributes: ['nombre'], as: 'residente' },
  { model: Persona, attributes: ['nombre'], as: 'contratista' },
  { model: Estado, attributes: ['nombre'], as: 'estado' },
  { model: ActividadesEstructura, attributes: ['estructura'], as: 'estructura' },
  { model: ActividadesEstructura, attributes: ['actividad'], as: 'actividad' },
]);
const getReportes = getRecordsWithAssociations(Reporte, [
  { model: Persona, attributes: ['nombre'], as: 'interventor' },
  { model: Persona, attributes: ['nombre'], as: 'residente' },
  { model: ActividadesEstructura, attributes: ['estructura'], as: 'estructura' },
  { model: ActividadesEstructura, attributes: ['actividad'], as: 'actividad' },
  { model: Estado, attributes: ['nombre'], as: 'estado' },
]);
const updateReporte = updateRecord(Reporte);
const deleteReporte = deleteRecord(Reporte);

module.exports = {
  addReporte,
  getReporte,
  getReportes,
  updateReporte,
  deleteReporte,
};
