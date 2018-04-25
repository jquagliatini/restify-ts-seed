import { Middleware } from '../types';
import { corsMiddleware, preflightMiddleware } from '../middlewares';
import helloRoute from './helloRoute';

const routes: Middleware[] = [corsMiddleware, helloRoute, preflightMiddleware];

export default routes;
