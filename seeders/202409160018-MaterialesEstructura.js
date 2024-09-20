'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MaterialesEstructura', [
  {
    "id_material_construccion": "1",
    "id_estructura": "1",
    "descripcion": ""
  },
  {
    "id_material_construccion": "2",
    "id_estructura": "1",
    "descripcion": ""
  },
  {
    "id_material_construccion": "3",
    "id_estructura": "1",
    "descripcion": ""
  },
  {
    "id_material_construccion": "4",
    "id_estructura": "1",
    "descripcion": ""
  },
  {
    "id_material_construccion": "5",
    "id_estructura": "1",
    "descripcion": ""
  },
  {
    "id_material_construccion": "6",
    "id_estructura": "1",
    "descripcion": ""
  },
  {
    "id_material_construccion": "7",
    "id_estructura": "1",
    "descripcion": ""
  },
  {
    "id_material_construccion": "8",
    "id_estructura": "1",
    "descripcion": ""
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MaterialesEstructura', null, {});
  }

};
