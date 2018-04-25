import { Next, Request, Response, Server } from 'restify';

const helloRoute = (server: Server) => {
  server.get('/hello/:name', (req: Request, res: Response, next: Next) => {
    res.json({ hello: req.params.name });
    return next();
  });

  return server;
};

export default helloRoute;
