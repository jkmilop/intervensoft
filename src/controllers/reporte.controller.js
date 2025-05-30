const Reporte = require('../models/reporte.js');
const Resultado = require('../models/resultado.js');

const Persona = require('../models/persona.js');


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
  { model: Resultado, attributes: ['nombre'], as: 'resultado' },
]);
const getReportes = getRecordsWithAssociations(Reporte, [
  { model: Persona, attributes: ['nombre'], as: 'interventor' },
  { model: Persona, attributes: ['nombre'], as: 'residente' },
  { model: Persona, attributes: ['nombre'], as: 'contratista' },
  { model: Resultado, attributes: ['nombre'], as: 'resultado' },
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
