'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoActividad', [
  {
    "nombre": ""
  },
  {
    "nombre": ""
  },
  {
    "nombre": ""
  },
  {
    "nombre": ""
  },
  {
    "nombre": ""
  },
  {
    "nombre": ""
  },
  {
    "nombre": ""
  },
  {
    "nombre": ""
  },
  {
    "nombre": ""
  },
  {
    "nombre": ""
  },
  {
    "nombre": ""
  },
  {
    "nombre": ""
  },
  {
    "nombre": ""
  },
  {
    "nombre": ""
  },
  {
    "nombre": ""
  },
  {
    "nombre": ""
  },
  {
    "nombre": ""
  },
  {
    "nombre": ""
  },
  {
    "nombre": ""
  },
  {
    "nombre": ""
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoActividad', null, {});
  }

};
