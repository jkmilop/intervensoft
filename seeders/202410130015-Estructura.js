'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Estructura', [
  {
    "id_conjunto": "1",
    "id_diseño": "1",
    "id_tipo_estructura": "1",
    "nombre": "a",
    "descripcion": "estructura_descripcion_1",
    "id_ubicacion_estructura": "1",
  },
  {
    "id_conjunto": "2",
    "id_diseño": "2",
    "id_tipo_estructura": "2",
    "nombre": "a",
    "descripcion": "estructura_descripcion_2",
    "id_ubicacion_estructura": "2",
  },
  {
    "id_conjunto": "3",
    "id_diseño": "3",
    "id_tipo_estructura": "3",
    "nombre": "a",
    "descripcion": "estructura_descripcion_3",
    "id_ubicacion_estructura": "3",
  },
  {
    "id_conjunto": "4",
    "id_diseño": "4",
    "id_tipo_estructura": "4",
    "nombre": "a",
    "descripcion": "estructura_descripcion_4",
    "id_ubicacion_estructura": "1",
  },
  {
    "id_conjunto": "5",
    "id_diseño": "5",
    "id_tipo_estructura": "5",
    "nombre": "a",
    "descripcion": "estructura_descripcion_5",
    "id_ubicacion_estructura": "1",
  },
  {
    "id_conjunto": "6",
    "id_diseño": "6",
    "id_tipo_estructura": "6",
    "nombre": "a",
    "descripcion": "estructura_descripcion_6",
    "id_ubicacion_estructura": "1",
  },
  {
    "id_conjunto": "7",
    "id_diseño": "7",
    "id_tipo_estructura": "7",
    "nombre": "a",
    "descripcion": "estructura_descripcion_7",
    "id_ubicacion_estructura": "1",
  },
  {
    "id_conjunto": "8",
    "id_diseño": "8",
    "id_tipo_estructura": "8",
    "nombre": "a",
    "descripcion": "estructura_descripcion_8",
    "id_ubicacion_estructura": "1",
  },
  {
    "id_conjunto": "9",
    "id_diseño": "9",
    "id_tipo_estructura": "9",
    "nombre": "a",
    "descripcion": "estructura_descripcion_9",
    "id_ubicacion_estructura": "1",
  },
  {
    "id_conjunto": "10",
    "id_diseño": "10",
    "id_tipo_estructura": "10",
    "nombre": "a",
    "descripcion": "estructura_descripcion_10",
    "id_ubicacion_estructura": "1",
  },
  {
    "id_conjunto": "11",
    "id_diseño": "11",
    "id_tipo_estructura": "11",
    "nombre": "a",
    "descripcion": "estructura_descripcion_11",
    "id_ubicacion_estructura": "1",
  },
  {
    "id_conjunto": "12",
    "id_diseño": "12",
    "id_tipo_estructura": "12",
    "nombre": "a",
    "descripcion": "estructura_descripcion_12",
    "id_ubicacion_estructura": "1",
  },
  {
    "id_conjunto": "13",
    "id_diseño": "13",
    "id_tipo_estructura": "13",
    "nombre": "a",
    "descripcion": "estructura_descripcion_13",
    "id_ubicacion_estructura": "1",
  },
  {
    "id_conjunto": "14",
    "id_diseño": "14",
    "id_tipo_estructura": "14",
    "nombre": "a",
    "descripcion": "estructura_descripcion_14",
    "id_ubicacion_estructura": "1",
  },
  {
    "id_conjunto": "15",
    "id_diseño": "15",
    "id_tipo_estructura": "15",
    "nombre": "a",
    "descripcion": "estructura_descripcion_15",
    "id_ubicacion_estructura": "1",
  },
  {
    "id_conjunto": "16",
    "id_diseño": "16",
    "id_tipo_estructura": "16",
    "nombre": "a",
    "descripcion": "estructura_descripcion_16",
    "id_ubicacion_estructura": "1",
  },
  {
    "id_conjunto": "17",
    "id_diseño": "17",
    "id_tipo_estructura": "17",
    "nombre": "a",
    "descripcion": "estructura_descripcion_17",
    "id_ubicacion_estructura": "1",
  },
  {
    "id_conjunto": "18",
    "id_diseño": "18",
    "id_tipo_estructura": "18",
    "nombre": "a",
    "descripcion": "estructura_descripcion_18",
    "id_ubicacion_estructura": "1",
  },
  {
    "id_conjunto": "19",
    "id_diseño": "19",
    "id_tipo_estructura": "19",
    "nombre": "a",
    "descripcion": "estructura_descripcion_19",
    "id_ubicacion_estructura": "1",
  },
  {
    "id_conjunto": "20",
    "id_diseño": "20",
    "id_tipo_estructura": "20",
    "nombre": "a",
    "descripcion": "estructura_descripcion_20",
    "id_ubicacion_estructura": "2",
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Estructura', null, {});
  }

};
