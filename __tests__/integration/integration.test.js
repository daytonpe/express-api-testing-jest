const request = require('supertest');
var express = require('express');
import startCore from '../../startCore';

let app, server; //similar to var

beforeAll(async () => { //before anything else run startCore on app
  app = express();
  server = await startCore(app);
});

afterAll(async () => { //close the app at the end
  server.close();  
});

describe('Integration: GET /get user list.', () => {
  it('should return 200.', async () => {
    const result = await request(app) //request is from supertest
      .get('/users')
      // .send([
      //   {
      //   "name": "Pat",
      //   "email": "pat@pat.com",
      //   "password": "1234"
      //   }
      // ])
      // .expect('Content-Length', '15')
      .expect(200)
      // .end(function(err, res) {
      //   if (err) throw err;
      // });

    // expect(result.body).toEqual({
    //   createdCount: 3
    // });
    // expect(result.status).toEqual(200);
  });

});