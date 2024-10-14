'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Conjunto', [
  {
    "nombre": "Gaviota de la Colina",
    "id_residente_encargado": "5",
    "id_proyecto": "1",
    "id_tipo_vivienda": "1"
  },
  {
    "nombre": "Girasoles del Castillo",
    "id_residente_encargado": "10",
    "id_proyecto": "2",
    "id_tipo_vivienda": "3"
  },
  {
    "nombre": "Pellares del Castillo B",
    "id_residente_encargado": "15",
    "id_proyecto": "2",
    "id_tipo_vivienda": "3"
  },
  {
    "nombre": "Violetas del Castillo",
    "id_residente_encargado": "25",
    "id_proyecto": "2",
    "id_tipo_vivienda": "3"
  },
  {
    "nombre": "Pellares del Castillo A",
    "id_residente_encargado": "30",
    "id_proyecto": "2",
    "id_tipo_vivienda": "2"
  },
  {
    "nombre": "Tucanes del Castillo",
    "id_residente_encargado": "35",
    "id_proyecto": "2",
    "id_tipo_vivienda": "2"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Conjunto', null, {});
  }

};
