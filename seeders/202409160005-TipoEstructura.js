'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoEstructura', [
  {
    "nombre": "Casa"
  },
  {
    "nombre": "Apartamento"
  },
  {
    "nombre": "Planta de Tratamiento de Aguas Residuales"
  },
  {
    "nombre": "Elevador"
  },
  {
    "nombre": "Gimnasio"
  },
  {
    "nombre": "Piscina"
  },
  {
    "nombre": "Salón Social"
  },
  {
    "nombre": "Zonas Verdes"
  },
  {
    "nombre": "Escalera Torre"
  },
  {
    "nombre": "Senderos Peatonales"
  },
  {
    "nombre": "Portería"
  },
  {
    "nombre": "Subestación Electrica"
  },
  {
    "nombre": "Parque"
  },
  {
    "nombre": "Vía"
  },
  {
    "nombre": "Glorieta"
  },
  {
    "nombre": "Andenes"
  },
  {
    "nombre": "Estacionamiento Visitantes"
  },
  {
    "nombre": "Edificio Administrativo"
  },
  {
    "nombre": "Baño Turco"
  },
  {
    "nombre": "Sauna"
  },
  {
    "nombre": "Red de Gas"
  },
  {
    "nombre": "Red de Alumbrado público"
  },
  {
    "nombre": "Red de baja tensión"
  },
  {
    "nombre": "Red de acueducto"
  },
  {
    "nombre": "Red de alcantarillado sanitario"
  },
  {
    "nombre": "Red de alcantarillado aguas lluvias"
  },
  {
    "nombre": "Telefonía"
  },
  {
    "nombre": "Internet"
  },
  {
    "nombre": "Jacuzzi"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoEstructura', null, {});
  }

};
