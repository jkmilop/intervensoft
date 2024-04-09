const Proyecto = require('../models/proyecto.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addProyecto = addRecord(Proyecto);
const getProyecto = getRecord(Proyecto);
const getProyectos = getRecords(Proyecto);
const updateProyecto = updateRecord(Proyecto);
const deleteProyecto = deleteRecord(Proyecto);

module.exports = {
  addProyecto,
  getProyecto,
  getProyectos,
  updateProyecto,
  deleteProyecto,
};
