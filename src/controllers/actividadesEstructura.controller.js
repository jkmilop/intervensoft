const ActividadesEstructura = require('../models/actividadesEstructura.js');
const Estructura = require('../models/estructura.js');
const Actividad = require('../models/actividad.js');
const Reporte = require('../models/reporte.js');

const {
  addRecord,
  getRecordWithAssociations,
  getRecordsWithAssociations,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addActividadesEstructura = addRecord(ActividadesEstructura);
const getActividadesEstructura = getRecordWithAssociations(ActividadesEstructura, [
  { model: Estructura, attributes: ['nombre'], as: 'estructura' },
  { model: Actividad, attributes: ['nombre'], as: 'actividad' },
  { model: Reporte, attributes: ['descripcion'], as: 'reporte' },


]);
const getActividadesEstructuras = getRecordsWithAssociations(ActividadesEstructura, [
  { model: Estructura, attributes: ['nombre'], as: 'estructura' },
  { model: Actividad, attributes: ['nombre'], as: 'actividad' },
  { model: Reporte, attributes: ['descripcion'], as: 'reporte' },
]);
const updateActividadesEstructura = updateRecord(ActividadesEstructura);
const deleteActividadesEstructura = deleteRecord(ActividadesEstructura);

module.exports = {
  addActividadesEstructura,
  getActividadesEstructura,
  getActividadesEstructuras,
  updateActividadesEstructura,
  deleteActividadesEstructura,
};
