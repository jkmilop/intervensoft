'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoDiseño', [
  {
    "nombre": "Diseño de Red Hidráulica",
    "descripcion": ""
  },
  {
    "nombre": "Diseño de Red de Gas",
    "descripcion": ""
  },
  {
    "nombre": "Diseño de Red de Internet Y Telecomunicaciones",
    "descripcion": ""
  },
  {
    "nombre": "Diseño de Red de Baja Tensión",
    "descripcion": ""
  },
  {
    "nombre": "Diseño de Red de Aguas Lluvias",
    "descripcion": ""
  },
  {
    "nombre": "Diseño Arquitectónico",
    "descripcion": ""
  },
  {
    "nombre": "Diseño Estructural",
    "descripcion": ""
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoDiseño', null, {});
  }

};
