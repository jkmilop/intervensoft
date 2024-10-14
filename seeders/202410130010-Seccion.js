'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Seccion', [
  {
    "nombre": "Escalera"
  },
  {
    "nombre": "Parqueadero"
  },
  {
    "nombre": "Dormitorio"
  },
  {
    "nombre": "Dormitorio principal"
  },
  {
    "nombre": "Sala"
  },
  {
    "nombre": "Baño"
  },
  {
    "nombre": "Antejardín"
  },
  {
    "nombre": "Jardín"
  },
  {
    "nombre": "Cocina"
  },
  {
    "nombre": "Comedor"
  },
  {
    "nombre": "Terraza"
  },
  {
    "nombre": "Balcón"
  },
  {
    "nombre": "Sala-Comedor"
  },
  {
    "nombre": "Cubierta Parqueadero"
  },
  {
    "nombre": "Estudio"
  },
  {
    "nombre": "Vestier"
  },
  {
    "nombre": "Deposito"
  },
  {
    "nombre": "Zona de oficios"
  },
  {
    "nombre": "Baño social"
  },
  {
    "nombre": "Juegos infantiles"
  },
  {
    "nombre": "Casa de muñecas"
  },
  {
    "nombre": "WC de Mascotas"
  },
  {
    "nombre": "Espacio uso múltiple"
  },
  {
    "nombre": "Cocineta"
  },
  {
    "nombre": "Sistema de Rejas"
  },
  {
    "nombre": "Desarenador"
  },
  {
    "nombre": "Decantador"
  },
  {
    "nombre": "Sistema de Deshidratación de Lodos"
  },
  {
    "nombre": "Secado de Lodos"
  },
  {
    "nombre": "Fangos Activados"
  },
  {
    "nombre": "Placas Rotativas"
  },
  {
    "nombre": "Placas Espirales"
  },
  {
    "nombre": "Deposición de Lodos"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Seccion', null, {});
  }

};
