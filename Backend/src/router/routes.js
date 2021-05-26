import { Router } from 'express';
const routes = Router();

import { Index, BadUrl } from '../controllers/controller';
import { GETuser, POSTuser, GETusers } from '../controllers/user';
import { Auth } from '../middlewares/Auth';

routes.route('/').get(Auth, Index);
routes.route('/user/:id').get(GETuser);
routes.route('/user').get(GETusers).post(POSTuser);

routes.route('*').get(BadUrl);

export default routes;
