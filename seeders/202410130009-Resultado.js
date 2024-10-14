'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Resultado', [
  {
    "nombre": "Aprobado",
    "descripcion": "resultado_descripcion_1"
  },
  {
    "nombre": "Reprobado",
    "descripcion": "resultado_descripcion_2"
  },
  {
    "nombre": "Pendiente",
    "descripcion": "resultado_descripcion_3"
  },
  {
    "nombre": "",
    "descripcion": "resultado_descripcion_4"
  },
  {
    "nombre": "",
    "descripcion": "resultado_descripcion_5"
  },
  {
    "nombre": "",
    "descripcion": "resultado_descripcion_6"
  },
  {
    "nombre": "",
    "descripcion": "resultado_descripcion_7"
  },
  {
    "nombre": "",
    "descripcion": "resultado_descripcion_8"
  },
  {
    "nombre": "",
    "descripcion": "resultado_descripcion_9"
  },
  {
    "nombre": "",
    "descripcion": "resultado_descripcion_10"
  },
  {
    "nombre": "",
    "descripcion": "resultado_descripcion_11"
  },
  {
    "nombre": "",
    "descripcion": "resultado_descripcion_12"
  },
  {
    "nombre": "",
    "descripcion": "resultado_descripcion_13"
  },
  {
    "nombre": "",
    "descripcion": "resultado_descripcion_14"
  },
  {
    "nombre": "",
    "descripcion": "resultado_descripcion_15"
  },
  {
    "nombre": "",
    "descripcion": "resultado_descripcion_16"
  },
  {
    "nombre": "",
    "descripcion": "resultado_descripcion_17"
  },
  {
    "nombre": "",
    "descripcion": "resultado_descripcion_18"
  },
  {
    "nombre": "",
    "descripcion": "resultado_descripcion_19"
  },
  {
    "nombre": "",
    "descripcion": "resultado_descripcion_20"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Resultado', null, {});
  }

};
