'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Estructura', [
      {
        "id_conjunto": "1",
        "id_diseño": "1",
        "id_tipo_estructura": "1",
        "nombre": "Casa 1",
        "id_estado": "1",

        "descripcion": "estructura_descripcion_1",
        "id_ubicacion_estructura": "1",
      },
      {
        "id_conjunto": "1",
        "id_diseño": "2",
        "id_tipo_estructura": "1",
        "nombre": "Casa 2",
        "id_estado": "2",

        "descripcion": "estructura_descripcion_2",
        "id_ubicacion_estructura": "1",
      },
      {
        "id_conjunto": "1",
        "id_diseño": "3",
        "id_tipo_estructura": "1",
        "nombre": "Casa 3",
        "id_estado": "2",

        "descripcion": "estructura_descripcion_3",
        "id_ubicacion_estructura": "1",
      }
    ], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Estructura', null, {});
  }

};
