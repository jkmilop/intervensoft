const express = require('express');
const cors = require('cors');
const app = express();
app.use((req, res, next) => {
  req.url = decodeURIComponent(req.url);
  next();
});
const actividadRoutes = require('./routes/actividad.routes.js');
const actividadesEstructuraRoutes = require('./routes/actividadesEstructura.routes.js');
const ctactividadesEstructuraRoutes = require('./routes/ctactividadesEstructura.routes.js');
const ciudadRoutes = require('./routes/ciudad.routes.js');
const conjuntoRoutes = require('./routes/conjunto.routes.js');
const diseñoRoutes = require('./routes/diseño.routes.js');
const dashboardRoutes = require('./routes/dashboard.routes.js');
const empresaRoutes = require('./routes/empresa.routes.js');
const etapaRoutes = require('./routes/etapa.routes.js');
const estadoRoutes = require('./routes/estado.routes.js');
const estructuraRoutes = require('./routes/estructura.routes.js');
const personaRoutes = require('./routes/persona.routes.js');
const proyectoRoutes = require('./routes/proyecto.routes.js');
const reporteRoutes = require('./routes/reporte.routes.js');
const resultadoRoutes = require('./routes/resultado.routes.js');
const rolRoutes = require('./routes/rol.routes.js');
const seccionRoutes = require('./routes/seccion.routes.js');
const tipoActividadRoutes = require('./routes/tipoActividad.routes.js');
const tipoEstructuraRoutes = require('./routes/tipoEstructura.routes.js');
const tipoViviendaRoutes = require('./routes/tipoVivienda.routes.js');
const ubicacionEstructuraRoutes = require('./routes/ubicacionEstructura.routes.js');
const usuarioRoutes = require('./routes/usuario.routes.js');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));
app.use(express.json());
app.use('/actividad', actividadRoutes);
app.use('/actividades-estructura', actividadesEstructuraRoutes);
app.use('/ctactividades-estructura', ctactividadesEstructuraRoutes);
app.use('/ciudad', ciudadRoutes);
app.use('/conjunto', conjuntoRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/diseño', diseñoRoutes);
app.use('/empresa', empresaRoutes);
app.use('/etapa', etapaRoutes);
app.use('/estado', estadoRoutes);
app.use('/estructura', estructuraRoutes);
app.use('/persona', personaRoutes);
app.use('/proyecto', proyectoRoutes);
app.use('/reporte', reporteRoutes);
app.use('/resultado', resultadoRoutes);
app.use('/rol', rolRoutes);
app.use('/seccion', seccionRoutes);
app.use('/tipo-actividad', tipoActividadRoutes);
app.use('/tipo-estructura', tipoEstructuraRoutes);
app.use('/tipo-vivienda', tipoViviendaRoutes);
app.use('/ubicacion-estructura', ubicacionEstructuraRoutes);
app.use('/usuario', usuarioRoutes);

module.exports = app;
