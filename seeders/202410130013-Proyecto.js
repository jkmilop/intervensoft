'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Proyecto', [
  {
    "nombre": "",
    "direccion": "",
    "id_ciudad": "1"
  },
  {
    "nombre": "",
    "direccion": "",
    "id_ciudad": "2"
  },
  {
    "nombre": "",
    "direccion": "",
    "id_ciudad": "3"
  },
  {
    "nombre": "",
    "direccion": "",
    "id_ciudad": "4"
  },
  {
    "nombre": "",
    "direccion": "",
    "id_ciudad": "5"
  },
  {
    "nombre": "",
    "direccion": "",
    "id_ciudad": "6"
  },
  {
    "nombre": "",
    "direccion": "",
    "id_ciudad": "7"
  },
  {
    "nombre": "",
    "direccion": "",
    "id_ciudad": "8"
  },
  {
    "nombre": "",
    "direccion": "",
    "id_ciudad": "9"
  },
  {
    "nombre": "",
    "direccion": "",
    "id_ciudad": "10"
  },
  {
    "nombre": "",
    "direccion": "",
    "id_ciudad": "11"
  },
  {
    "nombre": "",
    "direccion": "",
    "id_ciudad": "12"
  },
  {
    "nombre": "",
    "direccion": "",
    "id_ciudad": "13"
  },
  {
    "nombre": "",
    "direccion": "",
    "id_ciudad": "14"
  },
  {
    "nombre": "",
    "direccion": "",
    "id_ciudad": "15"
  },
  {
    "nombre": "",
    "direccion": "",
    "id_ciudad": "16"
  },
  {
    "nombre": "",
    "direccion": "",
    "id_ciudad": "17"
  },
  {
    "nombre": "",
    "direccion": "",
    "id_ciudad": "18"
  },
  {
    "nombre": "",
    "direccion": "",
    "id_ciudad": "19"
  },
  {
    "nombre": "",
    "direccion": "",
    "id_ciudad": "20"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Proyecto', null, {});
  }

};
