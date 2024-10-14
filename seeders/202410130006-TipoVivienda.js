'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoVivienda', [
  {
    "nombre": "Apartamentos tipo VIS"
  },
  {
    "nombre": "Casas Campestres de 1 Piso"
  },
  {
    "nombre": "Casas Campestres de 2 Piso"
  },
  {
    "nombre": "Casas de Interés Social"
  },
  {
    "nombre": "Casas de 3 Pisos"
  },
  {
    "nombre": "Departamentos"
  },
  {
    "nombre": "Duplex"
  },
  {
    "nombre": "Viviendas adosadas"
  },
  {
    "nombre": "Condominios"
  },
  {
    "nombre": "Departamentos de lujo"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoVivienda', null, {});
  }

};
