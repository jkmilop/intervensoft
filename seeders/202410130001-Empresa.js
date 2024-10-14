'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Empresa', [
  {
    "nombre": "LS Ingenieria SAS",
    "descripcion": ""
  },
  {
    "nombre": "DyD Constructora",
    "descripcion": ""
  },
  {
    "nombre": "Vitruvio",
    "descripcion": ""
  },
  {
    "nombre": "CBT Ingenieros SAS",
    "descripcion": ""
  },
  {
    "nombre": "CBT Ingenieros SAS",
    "descripcion": "Constructora El Castillo"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Empresa', null, {});
  }

};
