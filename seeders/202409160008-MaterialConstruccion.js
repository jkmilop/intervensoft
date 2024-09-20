'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MaterialConstruccion', [
  {
    "nombre": "Tubería PVC",
    "referencia": "Referencia1",
    "dimensiones": ""
  },
  {
    "nombre": "Accesorios PVC",
    "referencia": "Referencia2",
    "dimensiones": ""
  },
  {
    "nombre": "Varillas",
    "referencia": "Referencia3",
    "dimensiones": ""
  },
  {
    "nombre": "Cacetón de aligeramiento",
    "referencia": "Referencia4",
    "dimensiones": ""
  },
  {
    "nombre": "Dovela",
    "referencia": "Referencia5",
    "dimensiones": ""
  },
  {
    "nombre": "Concreto",
    "referencia": "Referencia6",
    "dimensiones": ""
  },
  {
    "nombre": "Ladrillo",
    "referencia": "Referencia7",
    "dimensiones": ""
  },
  {
    "nombre": "Pega",
    "referencia": "Referencia8",
    "dimensiones": ""
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MaterialConstruccion', null, {});
  }

};
