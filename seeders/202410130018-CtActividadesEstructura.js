'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CTActividadesEstructura', [
  {
    "descripcion": "ct_actividades_estructura_descripcion_1",
    "id_actividad": "1",
    "id_tipo_estructura": "1"
  },
  {
    "descripcion": "ct_actividades_estructura_descripcion_2",
    "id_actividad": "2",
    "id_tipo_estructura": "1"
  },
  {
    "descripcion": "ct_actividades_estructura_descripcion_3",
    "id_actividad": "3",
    "id_tipo_estructura": "1"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CTActividadesEstructura', null, {});
  }

};
