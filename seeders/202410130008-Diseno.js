'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Diseño', [
  {
    "descripcion": "Diseño 1",
    "nombre": ""
  },
  {
    "descripcion": "Diseño 2",
    "nombre": ""
  },
  {
    "descripcion": "Diseño 3",
    "nombre": ""
  },
  {
    "descripcion": "Diseño 4",
    "nombre": ""
  },
  {
    "descripcion": "Diseño 5",
    "nombre": ""
  },
  {
    "descripcion": "Diseño 6",
    "nombre": ""
  },
  {
    "descripcion": "Diseño 7",
    "nombre": ""
  },
  {
    "descripcion": "Diseño 8",
    "nombre": ""
  },
  {
    "descripcion": "Diseño 9",
    "nombre": ""
  },
  {
    "descripcion": "Diseño 10",
    "nombre": ""
  },
  {
    "descripcion": "Diseño 11",
    "nombre": ""
  },
  {
    "descripcion": "Diseño 12",
    "nombre": ""
  },
  {
    "descripcion": "Diseño 13",
    "nombre": ""
  },
  {
    "descripcion": "Diseño 14",
    "nombre": ""
  },
  {
    "descripcion": "Diseño 15",
    "nombre": ""
  },
  {
    "descripcion": "Diseño 16",
    "nombre": ""
  },
  {
    "descripcion": "Diseño 17",
    "nombre": ""
  },
  {
    "descripcion": "Diseño 18",
    "nombre": ""
  },
  {
    "descripcion": "Diseño 19",
    "nombre": ""
  },
  {
    "descripcion": "Diseño 20",
    "nombre": ""
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Diseño', null, {});
  }

};
