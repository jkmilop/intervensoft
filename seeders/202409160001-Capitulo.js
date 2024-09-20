'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Capitulo', [
  {
    "id_titulo": "3",
    "indice": "C.5.6",
    "capitulo": "Evaluación y Aceptación del Concreto"
  },
  {
    "id_titulo": "3",
    "indice": "C.5.8",
    "capitulo": "Mezclado"
  },
  {
    "id_titulo": "3",
    "indice": "C.6.1",
    "capitulo": "Diseño de Cimbras y Encofrados"
  },
  {
    "id_titulo": "3",
    "indice": "C.6.3",
    "capitulo": "Embebidos en el Concreto"
  },
  {
    "id_titulo": "3",
    "indice": "C.6.4",
    "capitulo": "Juntas de Construcción"
  },
  {
    "id_titulo": "4",
    "indice": "D.4.4",
    "capitulo": "Requisitos Constructivos para Cimentaciones"
  },
  {
    "id_titulo": "4",
    "indice": "D.4.6",
    "capitulo": "Requisitos Constructivos para el Mortero de Relleno"
  },
  {
    "id_titulo": "4",
    "indice": "D.5.1",
    "capitulo": "Hipótesis y Principios Generales"
  },
  {
    "id_titulo": "4",
    "indice": "D.5.2",
    "capitulo": "Módulos de Elasticidad y de Cortante"
  },
  {
    "id_titulo": "4",
    "indice": "D.5.3",
    "capitulo": "Cargas"
  },
  {
    "id_titulo": "4",
    "indice": "D.5.4",
    "capitulo": "Características Dimensionales Efectivas"
  },
  {
    "id_titulo": "4",
    "indice": "D.5.5",
    "capitulo": "Resistencia para Carga Axial de Compresión"
  },
  {
    "id_titulo": "4",
    "indice": "D.5.6",
    "capitulo": "Resistencia a Flexión sin Carga Axial"
  },
  {
    "id_titulo": "4",
    "indice": "D.5.8",
    "capitulo": "Diseño de Muros en la Dirección Paralela a su Plano"
  },
  {
    "id_titulo": "8",
    "indice": "9",
    "capitulo": "Requisitos Generales"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Capitulo', null, {});
  }

};
