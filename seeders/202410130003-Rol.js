'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rol', [
  {
    "nombre": "Contratista",
    "descripcion": ""
  },
  {
    "nombre": "Interventor",
    "descripcion": ""
  },
  {
    "nombre": "Residente",
    "descripcion": ""
  },
  {
    "nombre": "Administrador",
    "descripcion": ""
  },
  {
    "nombre": "Externo",
    "descripcion": ""
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rol', null, {});
  }

};
