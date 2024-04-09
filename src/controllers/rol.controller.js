const Rol = require('../models/rol.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addRol = addRecord(Rol);
const getRol = getRecord(Rol);
const getRoles = getRecords(Rol);
const updateRol = updateRecord(Rol);
const deleteRol = deleteRecord(Rol);

module.exports = {
  addRol,
  getRol,
  getRoles,
  updateRol,
  deleteRol,
};
