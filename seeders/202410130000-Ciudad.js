'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ciudad', [
  {
    "nombre": "Cali"
  },
  {
    "nombre": "Palmira"
  },
  {
    "nombre": "Buga"
  },
  {
    "nombre": "Yumbo"
  },
  {
    "nombre": "Buenaventura"
  },
  {
    "nombre": "Rozo"
  },
  {
    "nombre": "Cartago"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ciudad', null, {});
  }

};
