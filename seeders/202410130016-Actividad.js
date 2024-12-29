'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Actividad', [
  {
    "nombre": "Actividad 1",
    "id_etapa": "1",
    "id_tipo_actividad": "1",
    "id_seccion": "1"
  },
  {
    "nombre": "Actividad 2",
    "id_etapa": "2",
    "id_tipo_actividad": "2",
    "id_seccion": "2"
  },
  {
    "nombre": "Actividad 3",
    "id_etapa": "3",
    "id_tipo_actividad": "3",
    "id_seccion": "3"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Actividad', null, {});
  }

};
