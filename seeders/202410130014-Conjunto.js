'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Conjunto', [
  {
    "nombre": "Gaviota de la Colina",
    "id_residente_encargado": "5",
    "id_proyecto": "1",
    "id_tipo_vivienda": "1"
  },
  {
    "nombre": "Girasoles del Castillo",
    "id_residente_encargado": "10",
    "id_proyecto": "2",
    "id_tipo_vivienda": "3"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Conjunto', null, {});
  }

};
