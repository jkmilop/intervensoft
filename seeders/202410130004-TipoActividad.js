'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoActividad', [
  {
    "nombre": "Prueba de Laboratorio"
  },
  {
    "nombre": "Prueba de Campo"
  },
  {
    "nombre": "Evaluación del Plano"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoActividad', null, {});
  }

};
