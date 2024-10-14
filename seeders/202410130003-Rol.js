'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rol', [
  {
    "nombre": "",
    "descripcion": "rol_descripcion_1"
  },
  {
    "nombre": "",
    "descripcion": "rol_descripcion_2"
  },
  {
    "nombre": "",
    "descripcion": "rol_descripcion_3"
  },
  {
    "nombre": "",
    "descripcion": "rol_descripcion_4"
  },
  {
    "nombre": "",
    "descripcion": "rol_descripcion_5"
  },
  {
    "nombre": "",
    "descripcion": "rol_descripcion_6"
  },
  {
    "nombre": "",
    "descripcion": "rol_descripcion_7"
  },
  {
    "nombre": "",
    "descripcion": "rol_descripcion_8"
  },
  {
    "nombre": "",
    "descripcion": "rol_descripcion_9"
  },
  {
    "nombre": "",
    "descripcion": "rol_descripcion_10"
  },
  {
    "nombre": "",
    "descripcion": "rol_descripcion_11"
  },
  {
    "nombre": "",
    "descripcion": "rol_descripcion_12"
  },
  {
    "nombre": "",
    "descripcion": "rol_descripcion_13"
  },
  {
    "nombre": "",
    "descripcion": "rol_descripcion_14"
  },
  {
    "nombre": "",
    "descripcion": "rol_descripcion_15"
  },
  {
    "nombre": "",
    "descripcion": "rol_descripcion_16"
  },
  {
    "nombre": "",
    "descripcion": "rol_descripcion_17"
  },
  {
    "nombre": "",
    "descripcion": "rol_descripcion_18"
  },
  {
    "nombre": "",
    "descripcion": "rol_descripcion_19"
  },
  {
    "nombre": "",
    "descripcion": "rol_descripcion_20"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rol', null, {});
  }

};
