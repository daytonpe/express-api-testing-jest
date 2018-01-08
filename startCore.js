// import cors from 'cors'; //cors necessary for deploying to kubernetes
import bodyParser from 'body-parser';
import userController from './user/UserController';

var testdb = require('./db'); 

async function startCore(app) {

  // app.use(cors());
  // app.options('*', cors());
  app.use(bodyParser.json());
  app.use('/users', userController); //.use() is the mount-point for the middleware

  const server = app.listen(8080, () => { //spin up a server
    console.log('REST Service listening on port 8080!');
  });

  return server; //server is used in testing (not in app.js)
}

export default startCore;