const Zona = require('../models/zona.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addZona = addRecord(Zona);
const getZona = getRecord(Zona);
const getZonas = getRecords(Zona);
const updateZona = updateRecord(Zona);
const deleteZona = deleteRecord(Zona);

module.exports = {
  addZona,
  getZona,
  getZonas,
  updateZona,
  deleteZona,
};
