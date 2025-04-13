'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CTActividadesEstructura', [
      {
        "descripcion": "ct_casa",
        "id_actividad": "1",
        "id_tipo_estructura": "1"
      },
      {
        "descripcion": "ct_casa",
        "id_actividad": "2",
        "id_tipo_estructura": "1"
      },
      {
        "descripcion": "ct_casa",
        "id_actividad": "3",
        "id_tipo_estructura": "1"
      },
{
        "descripcion": "ct_actividades_apartamento",
        "id_actividad": "4",
        "id_tipo_estructura": "2"
      },
      {
        "descripcion": "ct_actividades_apartamento",
        "id_actividad": "5",
        "id_tipo_estructura": "2"
      },
      {
        "descripcion": "ct_actividades_apartamento",
        "id_actividad": "6",
        "id_tipo_estructura": "2"
      },
      {
        "descripcion": "ct_actividades_ptar",
        "id_actividad": "7",
        "id_tipo_estructura": "3"
      },
      {
        "descripcion": "ct_actividades_ptar",
        "id_actividad": "8",
        "id_tipo_estructura": "3"
      },
      {
        "descripcion": "ct_actividades_ptar",
        "id_actividad": "9",
        "id_tipo_estructura": "3"
      },
    ], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CTActividadesEstructura', null, {});
  }

};
