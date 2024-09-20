'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Estructura', [
  {
    "id_conjunto": "1",
    "id_ubicacion_estructura": "1",
    "id_tipo_estructura": "1",
    "nombre": "Casa 1",
    "descripcion": ""
  },
  {
    "id_conjunto": "1",
    "id_ubicacion_estructura": "1",
    "id_tipo_estructura": "1",
    "nombre": "Casa 2",
    "descripcion": ""
  },
  {
    "id_conjunto": "1",
    "id_ubicacion_estructura": "1",
    "id_tipo_estructura": "1",
    "nombre": "Casa 3",
    "descripcion": ""
  },
  {
    "id_conjunto": "1",
    "id_ubicacion_estructura": "1",
    "id_tipo_estructura": "1",
    "nombre": "Casa 4",
    "descripcion": ""
  },
  {
    "id_conjunto": "1",
    "id_ubicacion_estructura": "1",
    "id_tipo_estructura": "1",
    "nombre": "Casa 5",
    "descripcion": ""
  },
  {
    "id_conjunto": "1",
    "id_ubicacion_estructura": "1",
    "id_tipo_estructura": "1",
    "nombre": "Casa 6",
    "descripcion": ""
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Estructura', null, {});
  }

};
