'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Persona', [
  {
    "nombre": "Victoria Eugenia Hernández López",
    "cedula": "1064666202",
    "id_empresa": "1",
    "telefono": "32370148",
    "id_rol": "1"
  },
  {
    "nombre": "Emma Sofía Martinez Rodriguez",
    "cedula": "298138863",
    "id_empresa": "2",
    "telefono": "37939692",
    "id_rol": "2"
  },
  {
    "nombre": "Jorge Pablo Ramírez Pérez",
    "cedula": "959846154",
    "id_empresa": "3",
    "telefono": "35290584",
    "id_rol": "3"
  },
  {
    "nombre": "Oscar Luis González Ramírez",
    "cedula": "283037464",
    "id_empresa": "4",
    "telefono": "33035295",
    "id_rol": "4"
  },
  {
    "nombre": "Francisco Alberto López Gutiérrez",
    "cedula": "1114241245",
    "id_empresa": "5",
    "telefono": "30155671",
    "id_rol": "5"
  },
  {
    "nombre": "Dolores Gloria López Jiménez",
    "cedula": "738705802",
    "id_empresa": "1",
    "telefono": "35745462",
    "id_rol": "2"
  },
  {
    "nombre": "Paula Renata Pérez González",
    "cedula": "365925015",
    "id_empresa": "2",
    "telefono": "35413969",
    "id_rol": "2"
  },
  {
    "nombre": "Emma Ana González Martínez",
    "cedula": "358160089",
    "id_empresa": "3",
    "telefono": "37700543",
    "id_rol": "3"
  },
  {
    "nombre": "Cristian Pablo Martinez Sanchez",
    "cedula": "1023619333",
    "id_empresa": "4",
    "telefono": "36819016",
    "id_rol": "4"
  },
  {
    "nombre": "Fernando Andrés García Díaz",
    "cedula": "198014621",
    "id_empresa": "5",
    "telefono": "31965500",
    "id_rol": "5"
  },
  {
    "nombre": "Sofía Martina Hernández López",
    "cedula": "1118353871",
    "id_empresa": "1",
    "telefono": "30829936",
    "id_rol": "3"
  },
  {
    "nombre": "Juan Miguel Martinez Perez",
    "cedula": "475137645",
    "id_empresa": "2",
    "telefono": "37777903",
    "id_rol": "2"
  },
  {
    "nombre": "Dulce María Lopez Sanchez",
    "cedula": "112192899",
    "id_empresa": "3",
    "telefono": "36274476",
    "id_rol": "3"
  },
  {
    "nombre": "José Carlos García Martínez",
    "cedula": "916625352",
    "id_empresa": "4",
    "telefono": "36849272",
    "id_rol": "4"
  },
  {
    "nombre": "Victoria Sofía Sánchez López",
    "cedula": "91889258",
    "id_empresa": "5",
    "telefono": "30297365",
    "id_rol": "5"
  },
  {
    "nombre": "Juan Ángel Lopez Gonzalez",
    "cedula": "127956064",
    "id_empresa": "1",
    "telefono": "30282298",
    "id_rol": "4"
  },
  {
    "nombre": "Valentina Alejandra Rodriguez Martinez",
    "cedula": "1338441083",
    "id_empresa": "2",
    "telefono": "30047565",
    "id_rol": "2"
  },
  {
    "nombre": "Isabella Antonia Martínez Gutiérrez",
    "cedula": "830734750",
    "id_empresa": "3",
    "telefono": "30901214",
    "id_rol": "3"
  },
  {
    "nombre": "Victoria Carolina González Ramírez",
    "cedula": "1377044234",
    "id_empresa": "4",
    "telefono": "34107886",
    "id_rol": "4"
  },
  {
    "nombre": "Elena Dolores Sanchez Martinez",
    "cedula": "425302006",
    "id_empresa": "5",
    "telefono": "30802343",
    "id_rol": "5"
  },
  {
    "nombre": "Daniel Antonio Martínez López",
    "cedula": "738857098",
    "id_empresa": "1",
    "telefono": "31271106",
    "id_rol": "2"
  },
  {
    "nombre": "Fernando Felipe Hernández González",
    "cedula": "1070350207",
    "id_empresa": "2",
    "telefono": "30203049",
    "id_rol": "2"
  },
  {
    "nombre": "Javier Daniel Rodriguez Martinez",
    "cedula": "776006019",
    "id_empresa": "3",
    "telefono": "36027063",
    "id_rol": "3"
  },
  {
    "nombre": "Antonia Isabel Fernández Pérez",
    "cedula": "749776425",
    "id_empresa": "4",
    "telefono": "34707081",
    "id_rol": "4"
  },
  {
    "nombre": "José Roberto García López",
    "cedula": "981458277",
    "id_empresa": "5",
    "telefono": "30099093",
    "id_rol": "5"
  },
  {
    "nombre": "Oscar Pablo Gómez Sánchez",
    "cedula": "914948720",
    "id_empresa": "1",
    "telefono": "30287648",
    "id_rol": "2"
  },
  {
    "nombre": "Laura Isabel Lopez Sanchez",
    "cedula": "365366247",
    "id_empresa": "2",
    "telefono": "35909201",
    "id_rol": "2"
  },
  {
    "nombre": "José Pedro Martínez García",
    "cedula": "785062455",
    "id_empresa": "3",
    "telefono": "37100106",
    "id_rol": "3"
  },
  {
    "nombre": "Jessica Daniela Pérez Martínez",
    "cedula": "822686736",
    "id_empresa": "4",
    "telefono": "30937211",
    "id_rol": "4"
  },
  {
    "nombre": "Juan Miguel Martinez Rodriguez",
    "cedula": "1073074442",
    "id_empresa": "5",
    "telefono": "33024918",
    "id_rol": "5"
  },
  {
    "nombre": "Andrea Victoria Perez Martinez",
    "cedula": "976913346",
    "id_empresa": "1",
    "telefono": "32975720",
    "id_rol": "2"
  },
  {
    "nombre": "Victoria Antonia Sánchez García",
    "cedula": "237364828",
    "id_empresa": "2",
    "telefono": "32820873",
    "id_rol": "2"
  },
  {
    "nombre": "Carla Valeria Pérez Martínez",
    "cedula": "673740594",
    "id_empresa": "3",
    "telefono": "32729079",
    "id_rol": "3"
  },
  {
    "nombre": "Fernando Felipe Sanchez Martinez",
    "cedula": "189056123",
    "id_empresa": "4",
    "telefono": "33084313",
    "id_rol": "4"
  },
  {
    "nombre": "Juan Felipe González López",
    "cedula": "623390658",
    "id_empresa": "5",
    "telefono": "31112967",
    "id_rol": "5"
  },
  {
    "nombre": "Renata Belén Rodriguez Sanchez",
    "cedula": "644167260",
    "id_empresa": "1",
    "telefono": "33376214",
    "id_rol": "2"
  },
  {
    "nombre": "Aida Clara Rodríguez García",
    "cedula": "970641947",
    "id_empresa": "2",
    "telefono": "31736461",
    "id_rol": "2"
  },
  {
    "nombre": "Antonio José González García",
    "cedula": "773464784",
    "id_empresa": "3",
    "telefono": "33308428",
    "id_rol": "3"
  },
  {
    "nombre": "Raúl Felipe Rodríguez García",
    "cedula": "427206442",
    "id_empresa": "4",
    "telefono": "36145985",
    "id_rol": "4"
  },
  {
    "nombre": "Antonio Manuel García Rodríguez",
    "cedula": "224512997",
    "id_empresa": "5",
    "telefono": "37240607",
    "id_rol": "5"
  },
  {
    "nombre": "Sofía Gabriela Sánchez Fernández",
    "cedula": "1108635412",
    "id_empresa": "1",
    "telefono": "33571213",
    "id_rol": "2"
  },
  {
    "nombre": "Antonio José Lopez Sanchez",
    "cedula": "482303635",
    "id_empresa": "2",
    "telefono": "33551166",
    "id_rol": "2"
  },
  {
    "nombre": "Luis Daniel López Hernández",
    "cedula": "431152663",
    "id_empresa": "3",
    "telefono": "34031529",
    "id_rol": "3"
  },
  {
    "nombre": "Ana María Lopez Gonzalez",
    "cedula": "971090253",
    "id_empresa": "4",
    "telefono": "33076784",
    "id_rol": "4"
  },
  {
    "nombre": "José Francisco Rodríguez García",
    "cedula": "75582417",
    "id_empresa": "5",
    "telefono": "33754135",
    "id_rol": "5"
  },
  {
    "nombre": "Oscar Pablo Martinez Perez",
    "cedula": "1131278169",
    "id_empresa": "1",
    "telefono": "34079942",
    "id_rol": "2"
  },
  {
    "nombre": "Victoria Valentina García Sánchez",
    "cedula": "785617140",
    "id_empresa": "2",
    "telefono": "34427081",
    "id_rol": "2"
  },
  {
    "nombre": "Alejandro Alberto García Pérez",
    "cedula": "934216024",
    "id_empresa": "3",
    "telefono": "37614969",
    "id_rol": "3"
  },
  {
    "nombre": "Sofía Gabriela Jiménez López",
    "cedula": "189771686",
    "id_empresa": "4",
    "telefono": "32088235",
    "id_rol": "4"
  },
  {
    "nombre": "Raúl Pablo Martínez Gutiérrez",
    "cedula": "678351211",
    "id_empresa": "5",
    "telefono": "35116434",
    "id_rol": "5"
  },
  {
    "nombre": "Sergio Felipe González Rodríguez",
    "cedula": "439869787",
    "id_empresa": "1",
    "telefono": "34984094",
    "id_rol": "2"
  },
  {
    "nombre": "Vanessa Ana López Rodríguez",
    "cedula": "317049843",
    "id_empresa": "2",
    "telefono": "32856977",
    "id_rol": "2"
  },
  {
    "nombre": "Sergio Daniel Hernández López",
    "cedula": "279576293",
    "id_empresa": "3",
    "telefono": "37312937",
    "id_rol": "3"
  },
  {
    "nombre": "Carlos Roberto Fernández Sánchez",
    "cedula": "649614078",
    "id_empresa": "4",
    "telefono": "36367310",
    "id_rol": "4"
  },
  {
    "nombre": "Sergio Luis Gonzalez Sanchez",
    "cedula": "760708631",
    "id_empresa": "5",
    "telefono": "31892786",
    "id_rol": "5"
  },
  {
    "nombre": "Sergio Manuel Martínez Rodríguez",
    "cedula": "314927666",
    "id_empresa": "1",
    "telefono": "33848100",
    "id_rol": "2"
  },
  {
    "nombre": "Santiago Andrés González Martínez",
    "cedula": "1387437575",
    "id_empresa": "2",
    "telefono": "32898745",
    "id_rol": "2"
  },
  {
    "nombre": "Andrés Diego Pérez Sánchez",
    "cedula": "742508584",
    "id_empresa": "3",
    "telefono": "37512342",
    "id_rol": "3"
  },
  {
    "nombre": "Sergio Manuel Martinez Hernandez",
    "cedula": "135401707",
    "id_empresa": "4",
    "telefono": "36181210",
    "id_rol": "4"
  },
  {
    "nombre": "Lucía Valentina López Rodríguez",
    "cedula": "1055327251",
    "id_empresa": "5",
    "telefono": "37596889",
    "id_rol": "5"
  },
  {
    "nombre": "Isabella Renata García Sánchez",
    "cedula": "75653833",
    "id_empresa": "1",
    "telefono": "36782068",
    "id_rol": "2"
  },
  {
    "nombre": "David Luis Sánchez López",
    "cedula": "273285665",
    "id_empresa": "2",
    "telefono": "35165968",
    "id_rol": "2"
  },
  {
    "nombre": "Antonia Victoria Sánchez Fernández",
    "cedula": "97242669",
    "id_empresa": "3",
    "telefono": "32031144",
    "id_rol": "3"
  },
  {
    "nombre": "Roberto Miguel García Pérez",
    "cedula": "961448090",
    "id_empresa": "4",
    "telefono": "33623160",
    "id_rol": "4"
  },
  {
    "nombre": "Ava Catalina Martinez Gonzalez",
    "cedula": "454645936",
    "id_empresa": "5",
    "telefono": "32027291",
    "id_rol": "5"
  },
  {
    "nombre": "Daniel Antonio Ramírez Rodríguez",
    "cedula": "647173218",
    "id_empresa": "1",
    "telefono": "31177986",
    "id_rol": "2"
  },
  {
    "nombre": "Jorge Luis Fernández Sánchez",
    "cedula": "1058971264",
    "id_empresa": "2",
    "telefono": "37625777",
    "id_rol": "2"
  },
  {
    "nombre": "María Elena Sánchez Fernández",
    "cedula": "841750122",
    "id_empresa": "3",
    "telefono": "37638119",
    "id_rol": "3"
  },
  {
    "nombre": "Carlos Andrés Rodríguez Martínez",
    "cedula": "106098128",
    "id_empresa": "4",
    "telefono": "37748568",
    "id_rol": "4"
  },
  {
    "nombre": "Valentina Belén García López",
    "cedula": "193887411",
    "id_empresa": "5",
    "telefono": "32823888",
    "id_rol": "5"
  },
  {
    "nombre": "Miguel Ángel García Sánchez",
    "cedula": "471094323",
    "id_empresa": "1",
    "telefono": "30276652",
    "id_rol": "2"
  },
  {
    "nombre": "Juan Pablo López Hernández",
    "cedula": "1003048939",
    "id_empresa": "2",
    "telefono": "30991624",
    "id_rol": "2"
  },
  {
    "nombre": "Luis Fernando Pérez Martínez",
    "cedula": "744458229",
    "id_empresa": "3",
    "telefono": "34355482",
    "id_rol": "3"
  },
  {
    "nombre": "Mariana Sofia Martínez Sánchez",
    "cedula": "1078804783",
    "id_empresa": "4",
    "telefono": "33633200",
    "id_rol": "4"
  },
  {
    "nombre": "Juan Diego López Rodríguez",
    "cedula": "1057040288",
    "id_empresa": "5",
    "telefono": "35320717",
    "id_rol": "5"
  },
  {
    "nombre": "Elena Gabriela González Pérez",
    "cedula": "974837168",
    "id_empresa": "1",
    "telefono": "34489806",
    "id_rol": "2"
  },
  {
    "nombre": "Alejandro Pablo Martínez López",
    "cedula": "765899535",
    "id_empresa": "2",
    "telefono": "34014587",
    "id_rol": "2"
  },
  {
    "nombre": "Isabella Antonia Sánchez Gutiérrez",
    "cedula": "1089253658",
    "id_empresa": "3",
    "telefono": "34965489",
    "id_rol": "3"
  },
  {
    "nombre": "Carlos Andrés Pérez Ramírez",
    "cedula": "363641117",
    "id_empresa": "4",
    "telefono": "35785895",
    "id_rol": "4"
  },
  {
    "nombre": "Fernanda Antonia López Rodríguez",
    "cedula": "375262040",
    "id_empresa": "5",
    "telefono": "36484308",
    "id_rol": "5"
  },
  {
    "nombre": "Juan David Rodríguez Gutiérrez",
    "cedula": "1391418148",
    "id_empresa": "1",
    "telefono": "32951218",
    "id_rol": "2"
  },
  {
    "nombre": "Valentina Alejandra Martínez Pérez",
    "cedula": "320365018",
    "id_empresa": "2",
    "telefono": "35544769",
    "id_rol": "2"
  },
  {
    "nombre": "Juan Andrés López Sánchez",
    "cedula": "135575672",
    "id_empresa": "3",
    "telefono": "34676989",
    "id_rol": "3"
  },
  {
    "nombre": "Mariana Belén González López",
    "cedula": "788084072",
    "id_empresa": "4",
    "telefono": "33354139",
    "id_rol": "4"
  },
  {
    "nombre": "Carlos Andrés Pérez Gutiérrez",
    "cedula": "743214971",
    "id_empresa": "5",
    "telefono": "36203114",
    "id_rol": "5"
  },
  {
    "nombre": "Victoria Alejandra Martínez Ramírez",
    "cedula": "253409649",
    "id_empresa": "1",
    "telefono": "34923541",
    "id_rol": "2"
  },
  {
    "nombre": "David Felipe García López",
    "cedula": "472177096",
    "id_empresa": "2",
    "telefono": "30730902",
    "id_rol": "2"
  },
  {
    "nombre": "Ana Sofía Rodríguez Ramírez",
    "cedula": "1310290386",
    "id_empresa": "3",
    "telefono": "35166115",
    "id_rol": "3"
  },
  {
    "nombre": "Andrés Felipe Martínez López",
    "cedula": "661526044",
    "id_empresa": "4",
    "telefono": "34495701",
    "id_rol": "4"
  },
  {
    "nombre": "Victoria Alejandra López Ramírez",
    "cedula": "387648902",
    "id_empresa": "5",
    "telefono": "30931281",
    "id_rol": "5"
  },
  {
    "nombre": "Andrea Valentina López Rodríguez",
    "cedula": "976913346",
    "id_empresa": "1",
    "telefono": "32975720",
    "id_rol": "2"
  },
  {
    "nombre": "Victoria Antonia Sánchez García",
    "cedula": "237364828",
    "id_empresa": "2",
    "telefono": "32820873",
    "id_rol": "2"
  },
  {
    "nombre": "Carla Valeria Pérez Martínez",
    "cedula": "673740594",
    "id_empresa": "3",
    "telefono": "32729079",
    "id_rol": "3"
  },
  {
    "nombre": "Fernando Felipe Sanchez Martinez",
    "cedula": "189056123",
    "id_empresa": "4",
    "telefono": "33084313",
    "id_rol": "4"
  },
  {
    "nombre": "Juan Felipe González López",
    "cedula": "623390658",
    "id_empresa": "5",
    "telefono": "31112967",
    "id_rol": "5"
  },
  {
    "nombre": "Renata Belén Rodriguez Sanchez",
    "cedula": "644167260",
    "id_empresa": "1",
    "telefono": "33376214",
    "id_rol": "2"
  },
  {
    "nombre": "Aida Clara Rodríguez García",
    "cedula": "970641947",
    "id_empresa": "2",
    "telefono": "31736461",
    "id_rol": "2"
  },
  {
    "nombre": "Antonio José González García",
    "cedula": "773464784",
    "id_empresa": "3",
    "telefono": "33308428",
    "id_rol": "3"
  },
  {
    "nombre": "Raúl Felipe Rodríguez García",
    "cedula": "427206442",
    "id_empresa": "4",
    "telefono": "36145985",
    "id_rol": "4"
  },
  {
    "nombre": "Antonio Manuel García Rodríguez",
    "cedula": "224512997",
    "id_empresa": "5",
    "telefono": "37240607",
    "id_rol": "5"
  }
], {
      ignoreDuplicates: true  // Add this option to avoid inserting duplicate records
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Persona', null, {});
  }

};
