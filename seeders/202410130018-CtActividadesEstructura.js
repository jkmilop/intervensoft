'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CTActividadesEstructura', [
  {
    "descripcion": "ct_actividades_estructura_descripcion_1",
    "id_actividad": "1",
    "id_estructura": "1"
  },
  {
    "descripcion": "ct_actividades_estructura_descripcion_2",
    "id_actividad": "2",
    "id_estructura": "2"
  },
  {
    "descripcion": "ct_actividades_estructura_descripcion_3",
    "id_actividad": "3",
    "id_estructura": "3"
  },
  {
    "descripcion": "ct_actividades_estructura_descripcion_4",
    "id_actividad": "4",
    "id_estructura": "4"
  },
  {
    "descripcion": "ct_actividades_estructura_descripcion_5",
    "id_actividad": "5",
    "id_estructura": "5"
  },
  {
    "descripcion": "ct_actividades_estructura_descripcion_6",
    "id_actividad": "6",
    "id_estructura": "6"
  },
  {
    "descripcion": "ct_actividades_estructura_descripcion_7",
    "id_actividad": "7",
    "id_estructura": "7"
  },
  {
    "descripcion": "ct_actividades_estructura_descripcion_8",
    "id_actividad": "8",
    "id_estructura": "8"
  },
  {
    "descripcion": "ct_actividades_estructura_descripcion_9",
    "id_actividad": "9",
    "id_estructura": "9"
  },
  {
    "descripcion": "ct_actividades_estructura_descripcion_10",
    "id_actividad": "10",
    "id_estructura": "10"
  },
  {
    "descripcion": "ct_actividades_estructura_descripcion_11",
    "id_actividad": "11",
    "id_estructura": "11"
  },
  {
    "descripcion": "ct_actividades_estructura_descripcion_12",
    "id_actividad": "12",
    "id_estructura": "12"
  },
  {
    "descripcion": "ct_actividades_estructura_descripcion_13",
    "id_actividad": "13",
    "id_estructura": "13"
  },
  {
    "descripcion": "ct_actividades_estructura_descripcion_14",
    "id_actividad": "14",
    "id_estructura": "14"
  },
  {
    "descripcion": "ct_actividades_estructura_descripcion_15",
    "id_actividad": "15",
    "id_estructura": "15"
  },
  {
    "descripcion": "ct_actividades_estructura_descripcion_16",
    "id_actividad": "16",
    "id_estructura": "16"
  },
  {
    "descripcion": "ct_actividades_estructura_descripcion_17",
    "id_actividad": "17",
    "id_estructura": "17"
  },
  {
    "descripcion": "ct_actividades_estructura_descripcion_18",
    "id_actividad": "18",
    "id_estructura": "18"
  },
  {
    "descripcion": "ct_actividades_estructura_descripcion_19",
    "id_actividad": "19",
    "id_estructura": "19"
  },
  {
    "descripcion": "ct_actividades_estructura_descripcion_20",
    "id_actividad": "20",
    "id_estructura": "20"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CTActividadesEstructura', null, {});
  }

};
