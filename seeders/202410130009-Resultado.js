'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Resultado', [
      {
        "nombre": "Reprobado",
        "descripcion": "resultado_descripcion_2"
      },
      {
        "nombre": "Pendiente",
        "descripcion": "resultado_descripcion_3"
      },
      {
        "nombre": "Aprobado",
        "descripcion": "resultado_descripcion_1"
      }], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Resultado', null, {});
  }

};
