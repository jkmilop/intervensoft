'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Diseño', [
  {
    "descripcion": "diseno_descripcion_1",
    "nombre": ""
  },
  {
    "descripcion": "diseno_descripcion_2",
    "nombre": ""
  },
  {
    "descripcion": "diseno_descripcion_3",
    "nombre": ""
  },
  {
    "descripcion": "diseno_descripcion_4",
    "nombre": ""
  },
  {
    "descripcion": "diseno_descripcion_5",
    "nombre": ""
  },
  {
    "descripcion": "diseno_descripcion_6",
    "nombre": ""
  },
  {
    "descripcion": "diseno_descripcion_7",
    "nombre": ""
  },
  {
    "descripcion": "diseno_descripcion_8",
    "nombre": ""
  },
  {
    "descripcion": "diseno_descripcion_9",
    "nombre": ""
  },
  {
    "descripcion": "diseno_descripcion_10",
    "nombre": ""
  },
  {
    "descripcion": "diseno_descripcion_11",
    "nombre": ""
  },
  {
    "descripcion": "diseno_descripcion_12",
    "nombre": ""
  },
  {
    "descripcion": "diseno_descripcion_13",
    "nombre": ""
  },
  {
    "descripcion": "diseno_descripcion_14",
    "nombre": ""
  },
  {
    "descripcion": "diseno_descripcion_15",
    "nombre": ""
  },
  {
    "descripcion": "diseno_descripcion_16",
    "nombre": ""
  },
  {
    "descripcion": "diseno_descripcion_17",
    "nombre": ""
  },
  {
    "descripcion": "diseno_descripcion_18",
    "nombre": ""
  },
  {
    "descripcion": "diseno_descripcion_19",
    "nombre": ""
  },
  {
    "descripcion": "diseno_descripcion_20",
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
