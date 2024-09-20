'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UbicacionEstructura', [
  {
    "nombre": "Interna"
  },
  {
    "nombre": "Externa"
  },
  {
    "nombre": "Mixta"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UbicacionEstructura', null, {});
  }

};
