
// FROM DEVICE-COMMAND-API
import express from 'express';
import startCore from './startCore';
// import logger from './lib/utils/logger';
var db = require('./db');

const app = express()

startCore(app)
  // .catch(err => logger.error(err));