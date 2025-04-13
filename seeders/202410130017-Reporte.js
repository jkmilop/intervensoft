'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reporte', [
  {
    "descripcion": "reporte_descripcion_1",
    "id_interventor": "1",
    "id_residente": "1",
    "id_contratista": "1",
    "id_resultado": "2",
    "fecha": "2024-10-13"
  },
  {
    "descripcion": "reporte_descripcion_2",
    "id_interventor": "2",
    "id_residente": "2",
    "id_contratista": "2",
    "id_resultado": "2",
    "fecha": "2024-10-13"
  },
  {
    "descripcion": "reporte_descripcion_3",
    "id_interventor": "3",
    "id_residente": "3",
    "id_contratista": "3",
    "id_resultado": "2",
    "fecha": "2024-10-13"
  },
  {
    "descripcion": "reporte_descripcion_4",
    "id_interventor": "4",
    "id_residente": "4",
    "id_contratista": "4",
    "id_resultado": "2",
    "fecha": "2024-10-13"
  },
  {
    "descripcion": "reporte_descripcion_5",
    "id_interventor": "5",
    "id_residente": "5",
    "id_contratista": "5",
    "id_resultado": "2",
    "fecha": "2024-10-13"
  },
  {
    "descripcion": "reporte_descripcion_6",
    "id_interventor": "6",
    "id_residente": "6",
    "id_contratista": "6",
    "id_resultado": "2",
    "fecha": "2024-10-13"
  },
  {
    "descripcion": "reporte_descripcion_7",
    "id_interventor": "7",
    "id_residente": "7",
    "id_contratista": "7",
    "id_resultado": "2",
    "fecha": "2024-10-13"
  },
  {
    "descripcion": "reporte_descripcion_8",
    "id_interventor": "8",
    "id_residente": "8",
    "id_contratista": "8",
    "id_resultado": "2",
    "fecha": "2024-10-13"
  },
  {
    "descripcion": "reporte_descripcion_9",
    "id_interventor": "9",
    "id_residente": "9",
    "id_contratista": "9",
    "id_resultado": "2",
    "fecha": "2024-10-13"
  },
  {
    "descripcion": "reporte_descripcion_10",
    "id_interventor": "10",
    "id_residente": "10",
    "id_contratista": "10",
    "id_resultado": "2",
    "fecha": "2024-10-13"
  },
  {
    "descripcion": "reporte_descripcion_11",
    "id_interventor": "11",
    "id_residente": "11",
    "id_contratista": "11",
    "id_resultado": "2",
    "fecha": "2024-10-13"
  },
  {
    "descripcion": "reporte_descripcion_12",
    "id_interventor": "12",
    "id_residente": "12",
    "id_contratista": "12",
    "id_resultado": "2",
    "fecha": "2024-10-13"
  },
  {
    "descripcion": "reporte_descripcion_13",
    "id_interventor": "13",
    "id_residente": "13",
    "id_contratista": "13",
    "id_resultado": "2",
    "fecha": "2024-10-13"
  },
  {
    "descripcion": "reporte_descripcion_14",
    "id_interventor": "14",
    "id_residente": "14",
    "id_contratista": "14",
    "id_resultado": "2",
    "fecha": "2024-10-13"
  },
  {
    "descripcion": "reporte_descripcion_15",
    "id_interventor": "15",
    "id_residente": "15",
    "id_contratista": "15",
    "id_resultado": "2",
    "fecha": "2024-10-13"
  },
  {
    "descripcion": "reporte_descripcion_16",
    "id_interventor": "16",
    "id_residente": "16",
    "id_contratista": "16",
    "id_resultado": "2",
    "fecha": "2024-10-13"
  },
  {
    "descripcion": "reporte_descripcion_17",
    "id_interventor": "17",
    "id_residente": "17",
    "id_contratista": "17",
    "id_resultado": "2",
    "fecha": "2024-10-13"
  },
  {
    "descripcion": "reporte_descripcion_18",
    "id_interventor": "18",
    "id_residente": "18",
    "id_contratista": "18",
    "id_resultado": "2",
    "fecha": "2024-10-13"
  },
  {
    "descripcion": "reporte_descripcion_19",
    "id_interventor": "19",
    "id_residente": "19",
    "id_contratista": "19",
    "id_resultado": "2",
    "fecha": "2024-10-13"
  },
  {
    "descripcion": "reporte_descripcion_20",
    "id_interventor": "20",
    "id_residente": "20",
    "id_contratista": "20",
    "id_resultado": "2",
    "fecha": "2024-10-13"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reporte', null, {});
  }

};
