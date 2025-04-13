'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Estructura', [
      {
        "id_conjunto": "1",
        "id_diseño": "1",
        "id_tipo_estructura": "1",
        "nombre": "Casa 1",
        "id_estado": "2",

        "descripcion": "casa 1 Manuel Zelaya",
      },
      {
        "id_conjunto": "2",
        "id_diseño": "2",
        "id_tipo_estructura": "2",
        "nombre": "Apartamento 1",
        "id_estado": "2",

        "descripcion": "apartamento soltero ",
      },
      {
        "id_conjunto": "1",
        "id_diseño": "3",
        "id_tipo_estructura": "3",
        "nombre": "PTAR I",
        "id_estado": "2",

        "descripcion": "PTAR A",
      },
      {
        "id_conjunto": "2",
        "id_diseño": "2",
        "id_tipo_estructura": "3",
        "nombre": "PTAR II",
        "id_estado": "2",

        "descripcion": "PTAR B",
      },

    ], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Estructura', null, {});
  }

};
