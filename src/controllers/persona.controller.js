const Persona = require('../models/persona.js');
const Empresa = require('../models/empresa.js');
const Rol = require('../models/rol.js');
const handleError = require('../utils/errorHandler.js');

const {
  addRecord,
  getRecordWithAssociations,
  getRecordsWithAssociations ,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addPersona = addRecord(Persona);
const getPersona = getRecordWithAssociations(Persona, [
  { model: Empresa, attributes: ['nombre'], as: 'empresa' },
  { model: Rol, attributes: ['nombre'], as: 'rol' },
]);
const getPersonas = getRecordsWithAssociations(Persona, [
  { model: Empresa, attributes: ['nombre'], as: 'empresa' },
  { model: Rol, attributes: ['nombre'], as: 'rol' },
]);
const updatePersona = updateRecord(Persona);
const deletePersona = deleteRecord(Persona);

module.exports = {
  addPersona,
  getPersona,
  getPersonas,
  updatePersona,
  deletePersona,
};
