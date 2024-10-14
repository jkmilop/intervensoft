'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Persona', [
  {
    "nombre": "",
    "cedula": "1",
    "id_empresa": "1",
    "telefono": "1",
    "id_rol": "1"
  },
  {
    "nombre": "",
    "cedula": "2",
    "id_empresa": "2",
    "telefono": "2",
    "id_rol": "2"
  },
  {
    "nombre": "",
    "cedula": "3",
    "id_empresa": "3",
    "telefono": "3",
    "id_rol": "3"
  },
  {
    "nombre": "",
    "cedula": "4",
    "id_empresa": "4",
    "telefono": "4",
    "id_rol": "4"
  },
  {
    "nombre": "",
    "cedula": "5",
    "id_empresa": "5",
    "telefono": "5",
    "id_rol": "5"
  },
  {
    "nombre": "",
    "cedula": "6",
    "id_empresa": "6",
    "telefono": "6",
    "id_rol": "6"
  },
  {
    "nombre": "",
    "cedula": "7",
    "id_empresa": "7",
    "telefono": "7",
    "id_rol": "7"
  },
  {
    "nombre": "",
    "cedula": "8",
    "id_empresa": "8",
    "telefono": "8",
    "id_rol": "8"
  },
  {
    "nombre": "",
    "cedula": "9",
    "id_empresa": "9",
    "telefono": "9",
    "id_rol": "9"
  },
  {
    "nombre": "",
    "cedula": "10",
    "id_empresa": "10",
    "telefono": "10",
    "id_rol": "10"
  },
  {
    "nombre": "",
    "cedula": "11",
    "id_empresa": "11",
    "telefono": "11",
    "id_rol": "11"
  },
  {
    "nombre": "",
    "cedula": "12",
    "id_empresa": "12",
    "telefono": "12",
    "id_rol": "12"
  },
  {
    "nombre": "",
    "cedula": "13",
    "id_empresa": "13",
    "telefono": "13",
    "id_rol": "13"
  },
  {
    "nombre": "",
    "cedula": "14",
    "id_empresa": "14",
    "telefono": "14",
    "id_rol": "14"
  },
  {
    "nombre": "",
    "cedula": "15",
    "id_empresa": "15",
    "telefono": "15",
    "id_rol": "15"
  },
  {
    "nombre": "",
    "cedula": "16",
    "id_empresa": "16",
    "telefono": "16",
    "id_rol": "16"
  },
  {
    "nombre": "",
    "cedula": "17",
    "id_empresa": "17",
    "telefono": "17",
    "id_rol": "17"
  },
  {
    "nombre": "",
    "cedula": "18",
    "id_empresa": "18",
    "telefono": "18",
    "id_rol": "18"
  },
  {
    "nombre": "",
    "cedula": "19",
    "id_empresa": "19",
    "telefono": "19",
    "id_rol": "19"
  },
  {
    "nombre": "",
    "cedula": "20",
    "id_empresa": "20",
    "telefono": "20",
    "id_rol": "20"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Persona', null, {});
  }

};
