'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Estado', [
  {
    "nombre": "Por iniciar",
    "descripcion": "estado_descripcion_1"
  },
  {
    "nombre": "Iniciado",
    "descripcion": "estado_descripcion_2"
  },
  {
    "nombre": "Culminado",
    "descripcion": "estado_descripcion_3"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Estado', null, {});
  }

};
