'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoActividad', [
  {
    "actividad": "Prueba de Laboratorio"
  },
  {
    "actividad": "Prueba de Campo"
  },
  {
    "actividad": "Evaluación del Plano"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoActividad', null, {});
  }

};
