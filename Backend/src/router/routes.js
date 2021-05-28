import { Router } from 'express';
const routes = Router();

import { Index, BadUrl } from '../controllers/controller';
import {
  GETComunicados,
  POSTComunicado,
} from '../controllers/ComunicadoController';
import {
  GETDocente,
  GETDocentes,
  POSTDocente,
  PUTDocente,
} from '../controllers/DocenteController';
import {
  GETGrupo,
  GETGrupos,
  POSTGrupo,
  PUTGrupo,
} from '../controllers/GrupoController';
import { GETAlumnos, POSTAlumno, GETAlumno } from '../controllers/user';
import { Auth } from '../middlewares/Auth';
import {
  DELETEPublicacion,
  GETPublicacion,
  GETPublicaciones,
  POSTPublicacion,
  PUTPublicacion,
} from '../controllers/PublicacionController';
import {
  DELETEVacante,
  GETVacantes,
  POSTVacante,
  PUTVacante,
} from '../controllers/Vacante.Controller';
import {
  GETActividades,
  DELETEActividad,
  POSTActividad,
  PUTActividad,
} from '../controllers/Actividad.Controller';

routes
  .route('/publicaciones')
  .get(GETPublicaciones)
  .post(POSTPublicacion)
  .put(PUTPublicacion)
  .delete(DELETEPublicacion);
routes
  .route('/vacantes')
  .get(GETVacantes)
  .post(POSTVacante)
  .put(PUTVacante)
  .delete(DELETEVacante);
routes
  .route('/actividades')
  .get(GETActividades)
  .post(POSTActividad)
  .put(PUTActividad)
  .delete(DELETEActividad);
routes.route('/').get(Auth, Index);
routes.route('/grupo/:id').get(GETGrupo).put(PUTGrupo);
routes.route('/grupos').get(GETGrupos).post(POSTGrupo);
routes.route('/docentes').get(GETDocentes).post(POSTDocente);
routes.route('/docente/:id').put(PUTDocente);
routes.route('/comunicados').get(GETComunicados).post(POSTComunicado);
routes.route('/alumnos').get(GETAlumnos).post(POSTAlumno);
routes.route('/alumno/:id').get(GETAlumno);

routes.route('*').get(BadUrl);

export default routes;
