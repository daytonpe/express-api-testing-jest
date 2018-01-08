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
      expect(result.status).toEqual(200);
      expect(result.body.length>1)
  });
});

// const userID = '5a53be81fc85360012e14d8e';

describe('Integration: POST / create a new user.', () => {
  it('should return 200.', async () => {

    const result = await request(app) //request is from supertest
      .post('/users')
      .send(
        {
        name: "James Franco",
        email: "canyon@flannel.com",
        password: "wheresmyarm"
        }
      )
      // expect(result.success).toEqual(true);
      // console.log(result.body)
      .expect('Content-Type', 'application/json; charset=utf-8')
      expect(result.status).toEqual(200);
      expect(result.body).toBeDefined();
      expect(result.body._id).toBeDefined();
      expect(result.body.name).toEqual("James Franco");
      expect(result.body.email).toEqual("canyon@flannel.com");
      expect(result.body.password).toEqual("wheresmyarm");
    
  });
});

describe('Integration: PUT / update a user.', () => {

  //create a record that we can edit.
  let testUser;
  beforeEach(async () => { 
    const user = await request(app)
      .post('/users')
      .send(
        {
        name: "Greedo",
        email: "greedy@greederson.com",
        password: "heshotfirst"
        }
      );
    console.log(user.body)
    testUser = user.body;
  });



  it('should return 200.', async () => {
    console.log(testUser)
    const result = await request(app) //request is from supertest
      .put(`/users/${testUser._id}`)
      .send(
        {
        name: "Harrison Ford",
        email: "decker@han.com",
        password: "ishotfirst"
        }
      )
      expect(result.status).toEqual(200);
      expect(result.body.name).toEqual("Harrison Ford");
      expect(result.body.email).toEqual("decker@han.com");
      expect(result.body.password).toEqual("ishotfirst");
  });
});

describe('Integration: DELETE / delete a user.', () => {

  //create a record that we can edit.
  let testUser;
  beforeEach(async () => { 
    const user = await request(app)
      .post('/users')
      .send(
        {
        name: "Bilbo",
        email: "bilbo@swaggins.net",
        password: "sting"
        }
      );
    console.log(user.body)
    testUser = user.body;
  });


  it('should return 200.', async () => {
    const result = await request(app)
      .del(`/users/${testUser._id}`)
      .send()
      expect(result.status).toEqual(200);
      console.log(result.body)
    });
});