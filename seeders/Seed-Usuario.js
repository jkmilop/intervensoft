'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash("prueba", 10);

    return queryInterface.bulkInsert('Usuario', [
      {
        usuario: "prueba",
        contraseña: hashedPassword,
        correo: "prueba@LS.co",
        id_rol: 2,
      }
    ], {
      ignoreDuplicates: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuario', { usuario: "prueba" }, {});
  }
};
