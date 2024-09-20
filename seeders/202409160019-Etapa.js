'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Etapa', [
  {
    "nombre": "Movimiento de tierra",
    "descripcion": ""
  },
  {
    "nombre": "Instalación de red sanitaria de cimentación",
    "descripcion": ""
  },
  {
    "nombre": "Losa de cimentación",
    "descripcion": ""
  },
  {
    "nombre": "Muros de mampostería primer piso",
    "descripcion": ""
  },
  {
    "nombre": "Vigas de amarre de primer piso",
    "descripcion": ""
  },
  {
    "nombre": "Losa de entrepiso",
    "descripcion": ""
  },
  {
    "nombre": "Muros de mampostería segundo piso",
    "descripcion": ""
  },
  {
    "nombre": "Vigas de amarre de segundo piso",
    "descripcion": ""
  },
  {
    "nombre": "Losa de cubierta",
    "descripcion": ""
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Etapa', null, {});
  }

};
