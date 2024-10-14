'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Empresa', [
  {
    "nombre": "",
    "descripcion": "empresa_descripcion_1"
  },
  {
    "nombre": "",
    "descripcion": "empresa_descripcion_2"
  },
  {
    "nombre": "",
    "descripcion": "empresa_descripcion_3"
  },
  {
    "nombre": "",
    "descripcion": "empresa_descripcion_4"
  },
  {
    "nombre": "",
    "descripcion": "empresa_descripcion_5"
  },
  {
    "nombre": "",
    "descripcion": "empresa_descripcion_6"
  },
  {
    "nombre": "",
    "descripcion": "empresa_descripcion_7"
  },
  {
    "nombre": "",
    "descripcion": "empresa_descripcion_8"
  },
  {
    "nombre": "",
    "descripcion": "empresa_descripcion_9"
  },
  {
    "nombre": "",
    "descripcion": "empresa_descripcion_10"
  },
  {
    "nombre": "",
    "descripcion": "empresa_descripcion_11"
  },
  {
    "nombre": "",
    "descripcion": "empresa_descripcion_12"
  },
  {
    "nombre": "",
    "descripcion": "empresa_descripcion_13"
  },
  {
    "nombre": "",
    "descripcion": "empresa_descripcion_14"
  },
  {
    "nombre": "",
    "descripcion": "empresa_descripcion_15"
  },
  {
    "nombre": "",
    "descripcion": "empresa_descripcion_16"
  },
  {
    "nombre": "",
    "descripcion": "empresa_descripcion_17"
  },
  {
    "nombre": "",
    "descripcion": "empresa_descripcion_18"
  },
  {
    "nombre": "",
    "descripcion": "empresa_descripcion_19"
  },
  {
    "nombre": "",
    "descripcion": "empresa_descripcion_20"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Empresa', null, {});
  }

};
