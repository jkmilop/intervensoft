'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DiseñosEstructura', [
  {
    "id_estructura": "1",
    "id_diseño": "1"
  },
  {
    "id_estructura": "1",
    "id_diseño": "2"
  },
  {
    "id_estructura": "1",
    "id_diseño": "3"
  },
  {
    "id_estructura": "1",
    "id_diseño": "4"
  },
  {
    "id_estructura": "1",
    "id_diseño": "5"
  },
  {
    "id_estructura": "1",
    "id_diseño": "6"
  },
  {
    "id_estructura": "1",
    "id_diseño": "7"
  },
  {
    "id_estructura": "2",
    "id_diseño": "1"
  },
  {
    "id_estructura": "2",
    "id_diseño": "2"
  },
  {
    "id_estructura": "2",
    "id_diseño": "3"
  },
  {
    "id_estructura": "2",
    "id_diseño": "4"
  },
  {
    "id_estructura": "2",
    "id_diseño": "5"
  },
  {
    "id_estructura": "2",
    "id_diseño": "6"
  },
  {
    "id_estructura": "2",
    "id_diseño": "7"
  },
  {
    "id_estructura": "3",
    "id_diseño": "1"
  },
  {
    "id_estructura": "3",
    "id_diseño": "2"
  },
  {
    "id_estructura": "3",
    "id_diseño": "3"
  },
  {
    "id_estructura": "3",
    "id_diseño": "4"
  },
  {
    "id_estructura": "3",
    "id_diseño": "5"
  },
  {
    "id_estructura": "3",
    "id_diseño": "6"
  },
  {
    "id_estructura": "3",
    "id_diseño": "7"
  },
  {
    "id_estructura": "4",
    "id_diseño": "1"
  },
  {
    "id_estructura": "4",
    "id_diseño": "2"
  },
  {
    "id_estructura": "4",
    "id_diseño": "3"
  },
  {
    "id_estructura": "4",
    "id_diseño": "4"
  },
  {
    "id_estructura": "4",
    "id_diseño": "5"
  },
  {
    "id_estructura": "4",
    "id_diseño": "6"
  },
  {
    "id_estructura": "4",
    "id_diseño": "7"
  },
  {
    "id_estructura": "5",
    "id_diseño": "1"
  },
  {
    "id_estructura": "5",
    "id_diseño": "2"
  },
  {
    "id_estructura": "5",
    "id_diseño": "3"
  },
  {
    "id_estructura": "5",
    "id_diseño": "4"
  },
  {
    "id_estructura": "5",
    "id_diseño": "5"
  },
  {
    "id_estructura": "5",
    "id_diseño": "6"
  },
  {
    "id_estructura": "5",
    "id_diseño": "7"
  },
  {
    "id_estructura": "6",
    "id_diseño": "1"
  },
  {
    "id_estructura": "6",
    "id_diseño": "2"
  },
  {
    "id_estructura": "6",
    "id_diseño": "3"
  },
  {
    "id_estructura": "6",
    "id_diseño": "4"
  },
  {
    "id_estructura": "6",
    "id_diseño": "5"
  },
  {
    "id_estructura": "6",
    "id_diseño": "6"
  },
  {
    "id_estructura": "6",
    "id_diseño": "7"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DiseñosEstructura', null, {});
  }

};
