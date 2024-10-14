'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Conjunto', [
  {
    "nombre": "",
    "id_residente_encargado": "1",
    "id_proyecto": "1",
    "id_tipo_vivienda": "1"
  },
  {
    "nombre": "",
    "id_residente_encargado": "2",
    "id_proyecto": "2",
    "id_tipo_vivienda": "2"
  },
  {
    "nombre": "",
    "id_residente_encargado": "3",
    "id_proyecto": "3",
    "id_tipo_vivienda": "3"
  },
  {
    "nombre": "",
    "id_residente_encargado": "4",
    "id_proyecto": "4",
    "id_tipo_vivienda": "4"
  },
  {
    "nombre": "",
    "id_residente_encargado": "5",
    "id_proyecto": "5",
    "id_tipo_vivienda": "5"
  },
  {
    "nombre": "",
    "id_residente_encargado": "6",
    "id_proyecto": "6",
    "id_tipo_vivienda": "6"
  },
  {
    "nombre": "",
    "id_residente_encargado": "7",
    "id_proyecto": "7",
    "id_tipo_vivienda": "7"
  },
  {
    "nombre": "",
    "id_residente_encargado": "8",
    "id_proyecto": "8",
    "id_tipo_vivienda": "8"
  },
  {
    "nombre": "",
    "id_residente_encargado": "9",
    "id_proyecto": "9",
    "id_tipo_vivienda": "9"
  },
  {
    "nombre": "",
    "id_residente_encargado": "10",
    "id_proyecto": "10",
    "id_tipo_vivienda": "10"
  },
  {
    "nombre": "",
    "id_residente_encargado": "11",
    "id_proyecto": "11",
    "id_tipo_vivienda": "11"
  },
  {
    "nombre": "",
    "id_residente_encargado": "12",
    "id_proyecto": "12",
    "id_tipo_vivienda": "12"
  },
  {
    "nombre": "",
    "id_residente_encargado": "13",
    "id_proyecto": "13",
    "id_tipo_vivienda": "13"
  },
  {
    "nombre": "",
    "id_residente_encargado": "14",
    "id_proyecto": "14",
    "id_tipo_vivienda": "14"
  },
  {
    "nombre": "",
    "id_residente_encargado": "15",
    "id_proyecto": "15",
    "id_tipo_vivienda": "15"
  },
  {
    "nombre": "",
    "id_residente_encargado": "16",
    "id_proyecto": "16",
    "id_tipo_vivienda": "16"
  },
  {
    "nombre": "",
    "id_residente_encargado": "17",
    "id_proyecto": "17",
    "id_tipo_vivienda": "17"
  },
  {
    "nombre": "",
    "id_residente_encargado": "18",
    "id_proyecto": "18",
    "id_tipo_vivienda": "18"
  },
  {
    "nombre": "",
    "id_residente_encargado": "19",
    "id_proyecto": "19",
    "id_tipo_vivienda": "19"
  },
  {
    "nombre": "",
    "id_residente_encargado": "20",
    "id_proyecto": "20",
    "id_tipo_vivienda": "20"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Conjunto', null, {});
  }

};
