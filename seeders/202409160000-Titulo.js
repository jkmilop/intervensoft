'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Titulo', [
  {
    "indice": "A",
    "titulo": "Requisitos de Diseño y Construccion Sismoresistente"
  },
  {
    "indice": "B",
    "titulo": "Cargas"
  },
  {
    "indice": "C",
    "titulo": "Concreto"
  },
  {
    "indice": "D",
    "titulo": "Mamposteria"
  },
  {
    "indice": "E",
    "titulo": "Construccion de Casas de Uno y Dos Pisos"
  },
  {
    "indice": "F",
    "titulo": "Estructuras Metalicas"
  },
  {
    "indice": "G",
    "titulo": "Edificaciones de Madera"
  },
  {
    "indice": "H",
    "titulo": "Estudios Geotecnicos"
  },
  {
    "indice": "I",
    "titulo": "Supervision Tecnica"
  },
  {
    "indice": "J",
    "titulo": "Requisitos de Proteccion Contra Incendios"
  },
  {
    "indice": "K",
    "titulo": "Requisitos Complementarios"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Titulo', null, {});
  }

};
