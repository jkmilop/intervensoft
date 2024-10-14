'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Proyecto', [
  {
    "nombre": "Colinas del Norte",
    "direccion": "Cl.  10 #113",
    "id_ciudad": "1"
  },
  {
    "nombre": "Ciudad Campestre El Castillo",
    "direccion": "Avenida Montana",
    "id_ciudad": "2"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Proyecto', null, {});
  }

};
