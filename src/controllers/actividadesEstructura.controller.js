const ActividadesEstructura = require('../models/actividadesEstructura.js');
const {
  addRecord,
  getRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addActividadesEstructura = addRecord(ActividadesEstructura);
const getActividadesEstructura = getRecord(ActividadesEstructura);
const getActividadesEstructuras = getRecords(ActividadesEstructura);
const updateActividadesEstructura = updateRecord(ActividadesEstructura);
const deleteActividadesEstructura = deleteRecord(ActividadesEstructura);

module.exports = {
  addActividadesEstructura,
  getActividadesEstructura,
  getActividadesEstructuras,
  updateActividadesEstructura,
  deleteActividadesEstructura,
};
