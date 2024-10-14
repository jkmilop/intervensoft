const CTActividadesEstructura = require('../models/ctactividadesEstructura.js');
const TipoEstructura = require('../models/tipoEstructura.js');
const Actividad = require('../models/actividad.js');

const {
  addRecord,
  getRecordWithAssociations,
  getRecordsWithAssociations,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addCTActividadesEstructura = addRecord(CTActividadesEstructura);
const getCTActividadesEstructura = getRecordWithAssociations(CTActividadesEstructura, [
  { model: TipoEstructura, attributes: ['nombre'], as: 'tipo_estructura' },
  { model: Actividad, attributes: ['nombre'], as: 'actividad' },

]);
const getCTActividadesEstructuras = getRecordsWithAssociations(CTActividadesEstructura, [
  { model: TipoEstructura, attributes: ['nombre'], as: 'tipo_estructura' },
  { model: Actividad, attributes: ['nombre'], as: 'actividad' },

]);
const updateCTActividadesEstructura = updateRecord(CTActividadesEstructura);
const deleteCTActividadesEstructura = deleteRecord(CTActividadesEstructura);

module.exports = {
  addCTActividadesEstructura,
  getCTActividadesEstructura,
  getCTActividadesEstructuras,
  updateCTActividadesEstructura,
  deleteCTActividadesEstructura,
};
