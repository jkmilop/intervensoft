'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ActividadesEstructura',   [
      {
        "descripcion": "actividades_estructura_descripcion_1",
        "id_actividad": "1",
        "id_estructura": "1",
        "id_estado": "3",
        "id_reporte": "1",
        "fecha_inicio": "2024-10-13",
        "fecha_fin": "2024-10-13"
      },
      {
        "descripcion": "actividades_estructura_descripcion_2",
        "id_actividad": "2",
        "id_estructura": "1",
        "id_estado": "2",
        "id_reporte": "2",
        "fecha_inicio": "2024-10-13",
        "fecha_fin": "2024-10-13"
      },
      {
        "descripcion": "actividades_estructura_descripcion_3",
        "id_actividad": "3",
        "id_estructura": "1",
        "id_estado": "1",
        "id_reporte": "3",
        "fecha_inicio": "2024-10-13",
        "fecha_fin": "2024-10-13"
      
      }
    ]
  , {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ActividadesEstructura', null, {});
  }

};
