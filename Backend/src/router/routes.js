import { Router } from 'express';
const routes = Router();

import { Index, BadUrl } from '../controllers/controller';
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
import { GETuser, POSTuser, GETusers } from '../controllers/user';
import { Auth } from '../middlewares/Auth';

routes.route('/').get(Auth, Index);
routes.route('/user/:id').get(GETuser);
routes.route('/grupo/:id').get(GETGrupo).put(PUTGrupo);
routes.route('/grupos').get(GETGrupos).post(POSTGrupo);
routes.route('/docentes').get(GETDocentes).post(POSTDocente);
routes.route('/docente/:id').put(PUTDocente);
routes.route('/user').get(GETusers).post(POSTuser);

routes.route('*').get(BadUrl);

export default routes;
