'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Etapa', [
  {
    "nombre": "",
    "descripcion": "etapa_descripcion_1"
  },
  {
    "nombre": "",
    "descripcion": "etapa_descripcion_2"
  },
  {
    "nombre": "",
    "descripcion": "etapa_descripcion_3"
  },
  {
    "nombre": "",
    "descripcion": "etapa_descripcion_4"
  },
  {
    "nombre": "",
    "descripcion": "etapa_descripcion_5"
  },
  {
    "nombre": "",
    "descripcion": "etapa_descripcion_6"
  },
  {
    "nombre": "",
    "descripcion": "etapa_descripcion_7"
  },
  {
    "nombre": "",
    "descripcion": "etapa_descripcion_8"
  },
  {
    "nombre": "",
    "descripcion": "etapa_descripcion_9"
  },
  {
    "nombre": "",
    "descripcion": "etapa_descripcion_10"
  },
  {
    "nombre": "",
    "descripcion": "etapa_descripcion_11"
  },
  {
    "nombre": "",
    "descripcion": "etapa_descripcion_12"
  },
  {
    "nombre": "",
    "descripcion": "etapa_descripcion_13"
  },
  {
    "nombre": "",
    "descripcion": "etapa_descripcion_14"
  },
  {
    "nombre": "",
    "descripcion": "etapa_descripcion_15"
  },
  {
    "nombre": "",
    "descripcion": "etapa_descripcion_16"
  },
  {
    "nombre": "",
    "descripcion": "etapa_descripcion_17"
  },
  {
    "nombre": "",
    "descripcion": "etapa_descripcion_18"
  },
  {
    "nombre": "",
    "descripcion": "etapa_descripcion_19"
  },
  {
    "nombre": "",
    "descripcion": "etapa_descripcion_20"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Etapa', null, {});
  }

};
