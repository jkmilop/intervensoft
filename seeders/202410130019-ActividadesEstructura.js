'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ActividadesEstructura', [
  {
    "descripcion": "actividades_estructura_descripcion_1",
    "id_actividad": "1",
    "id_estructura": "1",
    "id_estado": "1",
    "id_reporte": "1",
    "fecha_inicio": "2024-10-13",
    "fecha_fin": "2024-10-13"
  },
  {
    "descripcion": "actividades_estructura_descripcion_2",
    "id_actividad": "2",
    "id_estructura": "2",
    "id_estado": "2",
    "id_reporte": "2",
    "fecha_inicio": "2024-10-13",
    "fecha_fin": "2024-10-13"
  },
  {
    "descripcion": "actividades_estructura_descripcion_3",
    "id_actividad": "3",
    "id_estructura": "3",
    "id_estado": "3",
    "id_reporte": "3",
    "fecha_inicio": "2024-10-13",
    "fecha_fin": "2024-10-13"
  },
  {
    "descripcion": "actividades_estructura_descripcion_4",
    "id_actividad": "4",
    "id_estructura": "4",
    "id_estado": "4",
    "id_reporte": "4",
    "fecha_inicio": "2024-10-13",
    "fecha_fin": "2024-10-13"
  },
  {
    "descripcion": "actividades_estructura_descripcion_5",
    "id_actividad": "5",
    "id_estructura": "5",
    "id_estado": "5",
    "id_reporte": "5",
    "fecha_inicio": "2024-10-13",
    "fecha_fin": "2024-10-13"
  },
  {
    "descripcion": "actividades_estructura_descripcion_6",
    "id_actividad": "6",
    "id_estructura": "6",
    "id_estado": "6",
    "id_reporte": "6",
    "fecha_inicio": "2024-10-13",
    "fecha_fin": "2024-10-13"
  },
  {
    "descripcion": "actividades_estructura_descripcion_7",
    "id_actividad": "7",
    "id_estructura": "7",
    "id_estado": "7",
    "id_reporte": "7",
    "fecha_inicio": "2024-10-13",
    "fecha_fin": "2024-10-13"
  },
  {
    "descripcion": "actividades_estructura_descripcion_8",
    "id_actividad": "8",
    "id_estructura": "8",
    "id_estado": "8",
    "id_reporte": "8",
    "fecha_inicio": "2024-10-13",
    "fecha_fin": "2024-10-13"
  },
  {
    "descripcion": "actividades_estructura_descripcion_9",
    "id_actividad": "9",
    "id_estructura": "9",
    "id_estado": "9",
    "id_reporte": "9",
    "fecha_inicio": "2024-10-13",
    "fecha_fin": "2024-10-13"
  },
  {
    "descripcion": "actividades_estructura_descripcion_10",
    "id_actividad": "10",
    "id_estructura": "10",
    "id_estado": "10",
    "id_reporte": "10",
    "fecha_inicio": "2024-10-13",
    "fecha_fin": "2024-10-13"
  },
  {
    "descripcion": "actividades_estructura_descripcion_11",
    "id_actividad": "11",
    "id_estructura": "11",
    "id_estado": "11",
    "id_reporte": "11",
    "fecha_inicio": "2024-10-13",
    "fecha_fin": "2024-10-13"
  },
  {
    "descripcion": "actividades_estructura_descripcion_12",
    "id_actividad": "12",
    "id_estructura": "12",
    "id_estado": "12",
    "id_reporte": "12",
    "fecha_inicio": "2024-10-13",
    "fecha_fin": "2024-10-13"
  },
  {
    "descripcion": "actividades_estructura_descripcion_13",
    "id_actividad": "13",
    "id_estructura": "13",
    "id_estado": "13",
    "id_reporte": "13",
    "fecha_inicio": "2024-10-13",
    "fecha_fin": "2024-10-13"
  },
  {
    "descripcion": "actividades_estructura_descripcion_14",
    "id_actividad": "14",
    "id_estructura": "14",
    "id_estado": "14",
    "id_reporte": "14",
    "fecha_inicio": "2024-10-13",
    "fecha_fin": "2024-10-13"
  },
  {
    "descripcion": "actividades_estructura_descripcion_15",
    "id_actividad": "15",
    "id_estructura": "15",
    "id_estado": "15",
    "id_reporte": "15",
    "fecha_inicio": "2024-10-13",
    "fecha_fin": "2024-10-13"
  },
  {
    "descripcion": "actividades_estructura_descripcion_16",
    "id_actividad": "16",
    "id_estructura": "16",
    "id_estado": "16",
    "id_reporte": "16",
    "fecha_inicio": "2024-10-13",
    "fecha_fin": "2024-10-13"
  },
  {
    "descripcion": "actividades_estructura_descripcion_17",
    "id_actividad": "17",
    "id_estructura": "17",
    "id_estado": "17",
    "id_reporte": "17",
    "fecha_inicio": "2024-10-13",
    "fecha_fin": "2024-10-13"
  },
  {
    "descripcion": "actividades_estructura_descripcion_18",
    "id_actividad": "18",
    "id_estructura": "18",
    "id_estado": "18",
    "id_reporte": "18",
    "fecha_inicio": "2024-10-13",
    "fecha_fin": "2024-10-13"
  },
  {
    "descripcion": "actividades_estructura_descripcion_19",
    "id_actividad": "19",
    "id_estructura": "19",
    "id_estado": "19",
    "id_reporte": "19",
    "fecha_inicio": "2024-10-13",
    "fecha_fin": "2024-10-13"
  },
  {
    "descripcion": "actividades_estructura_descripcion_20",
    "id_actividad": "20",
    "id_estructura": "20",
    "id_estado": "20",
    "id_reporte": "20",
    "fecha_inicio": "2024-10-13",
    "fecha_fin": "2024-10-13"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ActividadesEstructura', null, {});
  }

};
