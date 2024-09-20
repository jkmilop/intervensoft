'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EstructurasReporte', [
  {
    "id_estructura": "1",
    "id_reporte": "1"
  },
  {
    "id_estructura": "1",
    "id_reporte": "2"
  },
  {
    "id_estructura": "1",
    "id_reporte": "3"
  },
  {
    "id_estructura": "1",
    "id_reporte": "4"
  },
  {
    "id_estructura": "1",
    "id_reporte": "5"
  },
  {
    "id_estructura": "1",
    "id_reporte": "6"
  },
  {
    "id_estructura": "1",
    "id_reporte": "7"
  },
  {
    "id_estructura": "1",
    "id_reporte": "8"
  },
  {
    "id_estructura": "1",
    "id_reporte": "9"
  },
  {
    "id_estructura": "1",
    "id_reporte": "10"
  },
  {
    "id_estructura": "1",
    "id_reporte": "11"
  },
  {
    "id_estructura": "1",
    "id_reporte": "12"
  },
  {
    "id_estructura": "1",
    "id_reporte": "13"
  },
  {
    "id_estructura": "1",
    "id_reporte": "14"
  },
  {
    "id_estructura": "1",
    "id_reporte": "15"
  },
  {
    "id_estructura": "1",
    "id_reporte": "16"
  },
  {
    "id_estructura": "1",
    "id_reporte": "17"
  },
  {
    "id_estructura": "1",
    "id_reporte": "18"
  },
  {
    "id_estructura": "1",
    "id_reporte": "19"
  },
  {
    "id_estructura": "1",
    "id_reporte": "20"
  },
  {
    "id_estructura": "1",
    "id_reporte": "21"
  },
  {
    "id_estructura": "1",
    "id_reporte": "22"
  },
  {
    "id_estructura": "1",
    "id_reporte": "23"
  },
  {
    "id_estructura": "1",
    "id_reporte": "24"
  },
  {
    "id_estructura": "1",
    "id_reporte": "25"
  },
  {
    "id_estructura": "1",
    "id_reporte": "26"
  },
  {
    "id_estructura": "1",
    "id_reporte": "27"
  },
  {
    "id_estructura": "1",
    "id_reporte": "28"
  },
  {
    "id_estructura": "1",
    "id_reporte": "29"
  },
  {
    "id_estructura": "1",
    "id_reporte": "30"
  },
  {
    "id_estructura": "1",
    "id_reporte": "31"
  },
  {
    "id_estructura": "1",
    "id_reporte": "32"
  },
  {
    "id_estructura": "1",
    "id_reporte": "33"
  },
  {
    "id_estructura": "1",
    "id_reporte": "34"
  },
  {
    "id_estructura": "1",
    "id_reporte": "35"
  },
  {
    "id_estructura": "1",
    "id_reporte": "36"
  },
  {
    "id_estructura": "1",
    "id_reporte": "37"
  },
  {
    "id_estructura": "1",
    "id_reporte": "38"
  },
  {
    "id_estructura": "1",
    "id_reporte": "39"
  },
  {
    "id_estructura": "1",
    "id_reporte": "40"
  },
  {
    "id_estructura": "1",
    "id_reporte": "41"
  },
  {
    "id_estructura": "1",
    "id_reporte": "42"
  },
  {
    "id_estructura": "1",
    "id_reporte": "43"
  },
  {
    "id_estructura": "1",
    "id_reporte": "44"
  },
  {
    "id_estructura": "1",
    "id_reporte": "45"
  },
  {
    "id_estructura": "1",
    "id_reporte": "46"
  },
  {
    "id_estructura": "1",
    "id_reporte": "47"
  },
  {
    "id_estructura": "1",
    "id_reporte": "48"
  },
  {
    "id_estructura": "1",
    "id_reporte": "49"
  },
  {
    "id_estructura": "1",
    "id_reporte": "50"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EstructurasReporte', null, {});
  }

};
