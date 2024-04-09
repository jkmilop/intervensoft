const Persona = require('../models/persona.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addPersona = addRecord(Persona);
const getPersona = getRecord(Persona);
const getPersonas = getRecords(Persona);
const updatePersona = updateRecord(Persona);
const deletePersona = deleteRecord(Persona);

module.exports = {
  addPersona,
  getPersona,
  getPersonas,
  updatePersona,
  deletePersona,
};
