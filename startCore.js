import cors from 'cors';
import bodyParser from 'body-parser';
import userController from './user/UserController';

var testdb = require('./db'); 

async function startCore(app) {

  app.use(cors());
  app.options('*', cors());
  app.use(bodyParser.json());
  app.use('/users', userController);

  const server = app.listen(8080, () => {
    console.log('REST Service listening on port 8080!');
  });

  return server;
}

export default startCore;