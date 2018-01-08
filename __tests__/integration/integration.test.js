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
      .expect(200)
  });
});

const userID = '5a5396c880f140001ad6c52a';

describe('Integration: POST / create a new user.', () => {
  it('should return 200.', async () => {
    const result = await request(app) //request is from supertest
      .post('/users')
      .send([
        {
        // "_id": userID,
        "name": "Pat",
        "email": "pat@pat.com",
        "password": "1234"
        }
      ])
      .expect(200)
  });
});

describe('Integration: PUT / update a user.', () => {
  it('should return 200.', async () => {
    const result = await request(app) //request is from supertest
      .put('/users/'+userID)
      .send([
        {
        "name": "Logan",
        "email": "logger@flannel.com",
        "password": "5678"
        }
      ])
      .expect(200)
  });
});

describe('Integration: DELETE / delete a user.', () => {
  it('should return 200.', async () => {
    const result = await request(app)
      .delete("/users/"+userID)
      .send()
      .expect(200)
  });
});