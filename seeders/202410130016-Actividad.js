'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Actividad', [
  {
    "nombre": "",
    "id_etapa": "1",
    "id_tipo_actividad": "1",
    "id_seccion": "1"
  },
  {
    "nombre": "",
    "id_etapa": "2",
    "id_tipo_actividad": "2",
    "id_seccion": "2"
  },
  {
    "nombre": "",
    "id_etapa": "3",
    "id_tipo_actividad": "3",
    "id_seccion": "3"
  },
  {
    "nombre": "",
    "id_etapa": "4",
    "id_tipo_actividad": "4",
    "id_seccion": "4"
  },
  {
    "nombre": "",
    "id_etapa": "5",
    "id_tipo_actividad": "5",
    "id_seccion": "5"
  },
  {
    "nombre": "",
    "id_etapa": "6",
    "id_tipo_actividad": "6",
    "id_seccion": "6"
  },
  {
    "nombre": "",
    "id_etapa": "7",
    "id_tipo_actividad": "7",
    "id_seccion": "7"
  },
  {
    "nombre": "",
    "id_etapa": "8",
    "id_tipo_actividad": "8",
    "id_seccion": "8"
  },
  {
    "nombre": "",
    "id_etapa": "9",
    "id_tipo_actividad": "9",
    "id_seccion": "9"
  },
  {
    "nombre": "",
    "id_etapa": "10",
    "id_tipo_actividad": "10",
    "id_seccion": "10"
  },
  {
    "nombre": "",
    "id_etapa": "11",
    "id_tipo_actividad": "11",
    "id_seccion": "11"
  },
  {
    "nombre": "",
    "id_etapa": "12",
    "id_tipo_actividad": "12",
    "id_seccion": "12"
  },
  {
    "nombre": "",
    "id_etapa": "13",
    "id_tipo_actividad": "13",
    "id_seccion": "13"
  },
  {
    "nombre": "",
    "id_etapa": "14",
    "id_tipo_actividad": "14",
    "id_seccion": "14"
  },
  {
    "nombre": "",
    "id_etapa": "15",
    "id_tipo_actividad": "15",
    "id_seccion": "15"
  },
  {
    "nombre": "",
    "id_etapa": "16",
    "id_tipo_actividad": "16",
    "id_seccion": "16"
  },
  {
    "nombre": "",
    "id_etapa": "17",
    "id_tipo_actividad": "17",
    "id_seccion": "17"
  },
  {
    "nombre": "",
    "id_etapa": "18",
    "id_tipo_actividad": "18",
    "id_seccion": "18"
  },
  {
    "nombre": "",
    "id_etapa": "19",
    "id_tipo_actividad": "19",
    "id_seccion": "19"
  },
  {
    "nombre": "",
    "id_etapa": "20",
    "id_tipo_actividad": "20",
    "id_seccion": "20"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Actividad', null, {});
  }

};
