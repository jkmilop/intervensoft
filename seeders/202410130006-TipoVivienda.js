'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoVivienda', [
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
    return queryInterface.bulkDelete('TipoVivienda', null, {});
  }

};
