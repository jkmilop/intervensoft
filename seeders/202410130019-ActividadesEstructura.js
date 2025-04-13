'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ActividadesEstructura',   [
      {
        "descripcion": "Actividad 1 Casa",
        "id_actividad": "1",
        "id_estructura": "1",
        "id_estado": "1",
        "id_reporte": "1",
        "fecha_inicio": "2024-10-13",
        "fecha_fin": "2024-10-13"
      },
      {
        "descripcion": "Actividad 2 Casa",
        "id_actividad": "2",
        "id_estructura": "1",
        "id_estado": "1",
        "id_reporte": "2",
        "fecha_inicio": "2024-10-13",
        "fecha_fin": "2024-10-13"
      },
      {
        "descripcion": "Actividad 3 Casa",
        "id_actividad": "3",
        "id_estructura": "1",
        "id_estado": "1",
        "id_reporte": "3",
        "fecha_inicio": "2024-10-13",
        "fecha_fin": "2024-10-13"
      
      },
      {
        "descripcion": "Actividad 1 Apartamento",
        "id_actividad": "4",
        "id_estructura": "2",
        "id_estado": "1",
        "id_reporte": "4",
        "fecha_inicio": "2024-10-13",
        "fecha_fin": "2024-10-13"
      },
      {
        "descripcion": "Actividad 2 Apartamento",
        "id_actividad": "5",
        "id_estructura": "2",
        "id_estado": "1",
        "id_reporte": "5",
        "fecha_inicio": "2024-10-13",
        "fecha_fin": "2024-10-13"
      },
      {
        "descripcion": "Actividad 3 Apartamento",
        "id_actividad": "6",
        "id_estructura": "2",
        "id_estado": "1",
        "id_reporte": "6",
        "fecha_inicio": "2024-10-13",
        "fecha_fin": "2024-10-13"
      
      },
      {
        "descripcion": "Actividad 1 PTAR",
        "id_actividad": "7",
        "id_estructura": "4",
        "id_estado": "1",
        "id_reporte": "7",
        "fecha_inicio": "2024-10-13",
        "fecha_fin": "2024-10-13"
      },
      {
        "descripcion": "Actividad 2 PTAR",
        "id_actividad": "8",
        "id_estructura": "4",
        "id_estado": "1",
        "id_reporte": "8",
        "fecha_inicio": "2024-10-13",
        "fecha_fin": "2024-10-13"
      },
      {
        "descripcion": "Actividad 3 PTAR",
        "id_actividad": "9",
        "id_estructura": "4",
        "id_estado": "1",
        "id_reporte": "9",
        "fecha_inicio": "2024-10-13",
        "fecha_fin": "2024-10-13"
      
      },
      {
        "descripcion": "Actividad 1 PTAR",
        "id_actividad": "7",
        "id_estructura": "3",
        "id_estado": "1",
        "id_reporte": "10",
        "fecha_inicio": "2024-10-13",
        "fecha_fin": "2024-10-13"
      },
      {
        "descripcion": "Actividad 2 PTAR",
        "id_actividad": "8",
        "id_estructura": "3",
        "id_estado": "1",
        "id_reporte": "11",
        "fecha_inicio": "2024-10-13",
        "fecha_fin": "2024-10-13"
      },
      {
        "descripcion": "Actividad 3 PTAR",
        "id_actividad": "9",
        "id_estructura": "3",
        "id_estado": "1",
        "id_reporte": "12",
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
