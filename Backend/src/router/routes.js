import { Router } from 'express';
const routes = Router();

import { Index, BadUrl } from '../controllers/controller';
import { GETGrupo, GETGrupos, POSTGrupo } from '../controllers/GrupoController';
import { GETuser, POSTuser, GETusers } from '../controllers/user';
import { Auth } from '../middlewares/Auth';

routes.route('/').get(Auth, Index);
routes.route('/user/:id').get(GETuser);
routes.route('/grupo/:id').get(GETGrupo);
routes.route('/grupo').get(GETGrupos).post(POSTGrupo);
routes.route('/user').get(GETusers).post(POSTuser);

routes.route('*').get(BadUrl);

export default routes;
