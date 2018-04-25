import * as request from 'supertest';
import createServer from '../../src/createServer';

import * as restify from 'restify';

const server = createServer(restify.createServer());

describe('[integration] GET hello/:name', () => {
  it('should return a json with hello name', (done) => {
    request(server)
      .get('/hello/john')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((err, res) => {
        if (err) return done(err);

        expect(res.body).toEqual({
          hello: 'john',
        });
        done();
      });
  });
});
