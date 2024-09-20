const Conjunto = require('../models/conjunto.js');
const Persona = require('../models/persona.js');
const Proyecto = require('../models/proyecto.js');

const handleError = require('../utils/errorHandler.js');

const {
  addRecord,
  getRecordWithAssociations,
  getRecordsWithAssociations ,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addConjunto = addRecord(Conjunto);
const getConjunto = getRecordWithAssociations(Conjunto, [
  { model: Persona, attributes: ['nombre'], as: 'residente_encargado' },
  { model: Proyecto, attributes: ['nombre'], as: 'proyecto' },
]);
const getConjuntos = getRecordsWithAssociations(Conjunto, [
  { model: Persona, attributes: ['nombre'], as: 'residente_encargado' },
  { model: Proyecto, attributes: ['nombre'], as: 'proyecto' },
]);
const updateConjunto = updateRecord(Conjunto);
const deleteConjunto = deleteRecord(Conjunto);

module.exports = {
  addConjunto,
  getConjunto,
  getConjuntos,
  updateConjunto,
  deleteConjunto,
};
