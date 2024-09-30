const express = require('express');
const cors = require('cors');
const app = express();
app.use((req, res, next) => {
    req.url = decodeURIComponent(req.url);
    next();
  });
const ciudadRoutes = require('./routes/ciudad.routes.js');
const tituloRoutes = require('./routes/titulo.routes.js');
const capituloRoutes = require('./routes/capitulo.routes.js');
const proyectoRoutes = require('./routes/proyecto.routes.js');
const tipoEstructuraRoutes = require('./routes/tipoEstructura.routes.js');
const ubicacionEstructuraRoutes = require('./routes/ubicacionEstructura.routes.js');
const tipoViviendaRoutes = require('./routes/tipoVivienda.routes.js');
const materialConstruccionRoutes = require('./routes/materialConstruccion.routes.js');
const empresaRoutes = require('./routes/empresa.routes.js');
const rolRoutes = require('./routes/rol.routes.js');
const personaRoutes = require('./routes/persona.routes.js');
const tipoDiseñoRoutes = require('./routes/tipoDiseño.routes.js');
const diseñoRoutes = require('./routes/diseño.routes.js');
const conjuntoRoutes = require('./routes/conjunto.routes.js');
const estructuraRoutes = require('./routes/estructura.routes.js');
const zonaRoutes = require('./routes/zona.routes.js');
const zonaEstructuraRoutes = require('./routes/zonaEstructura.routes.js');
const materialesEstructuraRoutes = require('./routes/materialesEstructura.routes.js');
const etapaRoutes = require('./routes/etapa.routes.js');
const actividadRoutes = require('./routes/actividad.routes.js');
const actividadesEstructuraRoutes = require('./routes/actividadesEstructura.routes.js');
const diseñoEstructuraRoutes = require('./routes/diseñoEstructura.routes.js');
const reporteRoutes = require('./routes/reporte.routes.js');
const estructurasReporteRoutes = require('./routes/estructurasReporte.routes.js');
const tipoActividadRoutes = require('./routes/tipoActividad.routes.js');
const usuarioRoutes =  require('./routes/usuario.routes.js');

app.use(cors());
app.use(express.json());
app.use('/titulo', tituloRoutes);
app.use('/capitulo', capituloRoutes);
app.use('/ciudad', ciudadRoutes);
app.use('/proyecto', proyectoRoutes);
app.use('/tipo-estructura', tipoEstructuraRoutes);
app.use('/ubicacion-estructura', ubicacionEstructuraRoutes);
app.use('/tipo-vivienda', tipoViviendaRoutes);
app.use('/material-construccion', materialConstruccionRoutes);
app.use('/empresa', empresaRoutes);
app.use('/rol', rolRoutes);
app.use('/persona', personaRoutes);
app.use('/tipo-diseno', tipoDiseñoRoutes);
app.use('/diseno', diseñoRoutes);
app.use('/conjunto', conjuntoRoutes);
app.use('/estructura', estructuraRoutes);
app.use('/zona', zonaRoutes);
app.use('/zona-estructura', zonaEstructuraRoutes);
app.use('/materiales-estructura', materialesEstructuraRoutes);
app.use('/etapa', etapaRoutes);
app.use('/actividad', actividadRoutes);
app.use('/actividades-estructura', actividadesEstructuraRoutes);
app.use('/diseno-estructura', diseñoEstructuraRoutes);
app.use('/reporte', reporteRoutes);
app.use('/estructuras-reporte', estructurasReporteRoutes);
app.use('/tipo-actividad', tipoActividadRoutes);
app.use('/usuario', usuarioRoutes);
module.exports = app;
