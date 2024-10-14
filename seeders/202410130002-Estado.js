'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Estado', [
  {
    "nombre": "",
    "descripcion": "estado_descripcion_1"
  },
  {
    "nombre": "",
    "descripcion": "estado_descripcion_2"
  },
  {
    "nombre": "",
    "descripcion": "estado_descripcion_3"
  },
  {
    "nombre": "",
    "descripcion": "estado_descripcion_4"
  },
  {
    "nombre": "",
    "descripcion": "estado_descripcion_5"
  },
  {
    "nombre": "",
    "descripcion": "estado_descripcion_6"
  },
  {
    "nombre": "",
    "descripcion": "estado_descripcion_7"
  },
  {
    "nombre": "",
    "descripcion": "estado_descripcion_8"
  },
  {
    "nombre": "",
    "descripcion": "estado_descripcion_9"
  },
  {
    "nombre": "",
    "descripcion": "estado_descripcion_10"
  },
  {
    "nombre": "",
    "descripcion": "estado_descripcion_11"
  },
  {
    "nombre": "",
    "descripcion": "estado_descripcion_12"
  },
  {
    "nombre": "",
    "descripcion": "estado_descripcion_13"
  },
  {
    "nombre": "",
    "descripcion": "estado_descripcion_14"
  },
  {
    "nombre": "",
    "descripcion": "estado_descripcion_15"
  },
  {
    "nombre": "",
    "descripcion": "estado_descripcion_16"
  },
  {
    "nombre": "",
    "descripcion": "estado_descripcion_17"
  },
  {
    "nombre": "",
    "descripcion": "estado_descripcion_18"
  },
  {
    "nombre": "",
    "descripcion": "estado_descripcion_19"
  },
  {
    "nombre": "",
    "descripcion": "estado_descripcion_20"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Estado', null, {});
  }

};
