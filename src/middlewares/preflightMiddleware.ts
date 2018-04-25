import { Request, Response, Next, Server, Route } from 'restify';

import { Middleware } from '../types';

const preflightMiddleware: Middleware = (server: Server) => {
  const methodsOfPaths = (server.router as any)._registry._findMyWay.routes.reduce(
    (rev: any, route: any) => {
      const path: string = route.path;
      rev[path] = [].concat(rev[path], route.method).filter(Boolean);
      return rev;
    },
    {},
  );

  Object.keys(methodsOfPaths).forEach((path: string) => {
    // we don't want to override existing OPTIONS handlers
    if (methodsOfPaths[path].some((k: string) => k === 'OPTIONS')) {
      return;
    }

    server.opts(path, (req: Request, res: Response, next: Next) => {
      res.header(
        'Access-Control-Allow-Methods',
        methodsOfPaths[path].filter((m: string) => m !== 'OPTIONS').join(','),
      );
      res.send(204);
      return next();
    });
  });
  return server;
};

export default preflightMiddleware;
