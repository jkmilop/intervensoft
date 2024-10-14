'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rol', [
  {
    "nombre": "Supervisor",
    "descripcion": ""
  },
  {
    "nombre": "Interventor",
    "descripcion": ""
  },
  {
    "nombre": "Coordinador",
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
