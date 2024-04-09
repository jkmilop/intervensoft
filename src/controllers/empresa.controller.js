const Empresa = require('../models/empresa.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addEmpresa = addRecord(Empresa);
const getEmpresa = getRecord(Empresa);
const getEmpresas = getRecords(Empresa);
const updateEmpresa = updateRecord(Empresa);
const deleteEmpresa = deleteRecord(Empresa);

module.exports = {
  addEmpresa,
  getEmpresa,
  getEmpresas,
  updateEmpresa,
  deleteEmpresa,
};
