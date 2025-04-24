'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoEstructura',
      [
        { "nombre": "Casa" },
        { "nombre": "Apartamento" },
        { "nombre": "Portería" },
        { "nombre": "Cercas perimetrales" },
        { "nombre": "Garitas de seguridad" },
        { "nombre": "Vías internas" },
        { "nombre": "Vías externas" },
        { "nombre": "Acera" },
        { "nombre": "Parqueadero" },
        { "nombre": "Estacionamiento para visitantes" },
        { "nombre": "Senderos peatonales" },
        { "nombre": "Ciclorutas" },
        { "nombre": "Red de acueducto" },
        { "nombre": "Red de alcantarillado sanitario" },
        { "nombre": "Red de alcantarillado pluvial" },
        { "nombre": "Red de energía eléctrica" },
        { "nombre": "Red de gas natural" },
        { "nombre": "Red de telecomunicaciones (Internet, telefonía, TV)" },
        { "nombre": "Planta eléctrica" },
        { "nombre": "Subestación eléctrica" },
        { "nombre": "Zonas verdes" },
        { "nombre": "Jardines" },
        { "nombre": "Salón social" },
        { "nombre": "BBQ y kioscos" },
        { "nombre": "Gimnasio" },
        { "nombre": "Piscina" },
        { "nombre": "Jacuzzi" },
        { "nombre": "Juegos infantiles" },
        { "nombre": "Canchas deportivas (fútbol, baloncesto, tenis)" },
        { "nombre": "Parque de mascotas" },
        { "nombre": "Áreas de lectura o coworking" },
        { "nombre": "Sala de eventos" },
        { "nombre": "Cuarto de basuras" },
        { "nombre": "Estaciones de reciclaje" },
        { "nombre": "Tanques de agua lluvia" },
        { "nombre": "Sistemas de recolección y tratamiento de aguas grises" },
        { "nombre": "Sistema de riego automático" },
        { "nombre": "Cuarto de mantenimiento" },
        { "nombre": "Taller o bodega de herramientas" },
        { "nombre": "Cuarto de bombas / planta hidráulica" },
        { "nombre": "Lavandería común" },
        { "nombre": "Oficina administrativa" },
        { "nombre": "Parqueaderos de bicicletas" },
        { "nombre": "Rampas para discapacitados" },
        { "nombre": "Ascensores" },
        { "nombre": "Escaleras" },
        { "nombre": "Fachadas" },
        { "nombre": "Techos o losas" },
        { "nombre": "Elementos estructurales" },
        { "nombre": "Accesos" }
      ]
      , {
        ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
      });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoEstructura', null, {});
  }

};
