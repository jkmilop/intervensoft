'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Actividad', [
  {
    "nombre": "Localización",
    "id_etapa": "1",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Nivelación de terreno natural",
    "id_etapa": "1",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Excavación",
    "id_etapa": "1",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Nivelación de cota subrasante",
    "id_etapa": "1",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Extensión y compactación de capas de mejoramiento de suelo con material de préstamo",
    "id_etapa": "1",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Nivelación de cotas por capa",
    "id_etapa": "1",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Toma de densidades por capa",
    "id_etapa": "1",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Localización de la red sanitaria de cimentación",
    "id_etapa": "2",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Excavación para la red sanitaria de cimentación",
    "id_etapa": "2",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Instalación de tuberia de accesorios",
    "id_etapa": "2",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Revisión de instalación de puntos sanitarios",
    "id_etapa": "2",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Prueba de estanqueidad",
    "id_etapa": "2",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Armar vigas de cimentación",
    "id_etapa": "3",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Control de acero de refuerzo",
    "id_etapa": "3",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Instalar casetones aligeramiento",
    "id_etapa": "3",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Control de casetones de aligeramiento",
    "id_etapa": "3",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Instalar red de aguas lluvias",
    "id_etapa": "3",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Instalar red hidráulica",
    "id_etapa": "3",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Prueba hidráulica",
    "id_etapa": "3",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Instalar red eléctrica",
    "id_etapa": "3",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Instalacion de dovelas de primer piso",
    "id_etapa": "3",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Control de dovelas de primer piso",
    "id_etapa": "3",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Vaciado de concreto de losa de cimentación",
    "id_etapa": "3",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Plantear la mampostería para asignación de celdas",
    "id_etapa": "4",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Construcción de muros en mamposteria",
    "id_etapa": "4",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Control de verticalidad",
    "id_etapa": "4",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Control de escuadras",
    "id_etapa": "4",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Control de refuerzos horizontales y verticales",
    "id_etapa": "4",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Construcción de dovelas",
    "id_etapa": "4",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Control de vaciado de grouting",
    "id_etapa": "4",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Armado de Vigas de amarre de primer piso",
    "id_etapa": "5",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Revisión Vigas de amarre de primer piso",
    "id_etapa": "5",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Vaciado de concreto de Vigas de amarre de primer piso",
    "id_etapa": "5",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Encofrado para Losa de entrepiso",
    "id_etapa": "6",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Armado de vigas de entrepiso",
    "id_etapa": "6",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Revision de vigas de entrepiso",
    "id_etapa": "6",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Instalación de malla inferior",
    "id_etapa": "6",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Revision de malla inferior",
    "id_etapa": "6",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Instalación de red sanitaria de entrepiso",
    "id_etapa": "6",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Instalación de red hidraulica de entrepiso",
    "id_etapa": "6",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Instalación de red electrica de entrepiso",
    "id_etapa": "6",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Revision de redes",
    "id_etapa": "6",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Instalación de malla superior",
    "id_etapa": "6",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Revision de malla superior",
    "id_etapa": "6",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Instalación de dovelas de segundo piso",
    "id_etapa": "6",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Revision de dovelas de segundo piso",
    "id_etapa": "6",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Nivelación de losa de entrepiso",
    "id_etapa": "6",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Vaciado de concreto de losa de entrepiso",
    "id_etapa": "6",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Plantear la mampostería para asignación de celdas",
    "id_etapa": "7",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Construcción de muros en mamposteria de segundo piso",
    "id_etapa": "7",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Control de verticalidad",
    "id_etapa": "7",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Control de escuadras",
    "id_etapa": "7",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Control de refuerzos horizontales y verticales",
    "id_etapa": "7",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Construcción de dovelas",
    "id_etapa": "7",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Control de vaciado de grouting",
    "id_etapa": "7",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Armado de Vigas de amarre de segundo piso",
    "id_etapa": "8",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Revisión Vigas de amarre de segundo piso",
    "id_etapa": "8",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Vaciado de concreto de Vigas de amarre de segundo piso",
    "id_etapa": "8",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Encofrado",
    "id_etapa": "9",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Armado de vigas de cubierta",
    "id_etapa": "9",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Revision de vigas de cubierta",
    "id_etapa": "9",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Instalación de malla inferior",
    "id_etapa": "9",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Revision de malla inferior",
    "id_etapa": "9",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Instalación de red sanitaria de cubierta",
    "id_etapa": "9",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Instalación de red hidraulica de cubierta",
    "id_etapa": "9",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Instalación de red electrica de cubierta",
    "id_etapa": "9",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Revision de redes",
    "id_etapa": "9",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Instalación de malla superior",
    "id_etapa": "9",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Revision de malla superior",
    "id_etapa": "9",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Nivelación de Losa de cubierta",
    "id_etapa": "9",
    "id_tipo_actividad": "3"
  },
  {
    "nombre": "Vaciado de concreto de Losa de cubierta",
    "id_etapa": "9",
    "id_tipo_actividad": "3"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Actividad', null, {});
  }

};
