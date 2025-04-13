const Proyecto = require('../models/proyecto.js');
const Estado = require('../models/estado.js');
const Ciudad = require('../models/ciudad.js');
const {
  addRecord,
  getRecordWithAssociations,
  getRecordsWithAssociations,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addProyecto = addRecord(Proyecto);
const getProyecto = getRecordWithAssociations(Proyecto, [
  { model: Ciudad, attributes: ['nombre'], as: 'ciudad' },
  { model: Estado, attributes: ['nombre'], as: 'estado' },

]);
const getProyectos = getRecordsWithAssociations(Proyecto, [
  { model: Ciudad, attributes: ['nombre'], as: 'ciudad' },
  { model: Estado, attributes: ['nombre'], as: 'estado' },

]);
const updateProyecto = updateRecord(Proyecto);
const deleteProyecto = deleteRecord(Proyecto);

module.exports = {
  addProyecto,
  getProyecto,
  getProyectos,
  updateProyecto,
  deleteProyecto,
};
