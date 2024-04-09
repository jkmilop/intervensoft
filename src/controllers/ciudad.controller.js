const Ciudad = require('../models/ciudad.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addCiudad = addRecord(Ciudad);
const getCiudad = getRecord(Ciudad);
const getCiudades = getRecords(Ciudad);
const updateCiudad = updateRecord(Ciudad);
const deleteCiudad = deleteRecord(Ciudad);

module.exports = {
  addCiudad,
  getCiudad,
  getCiudades,
  updateCiudad,
  deleteCiudad,
};
