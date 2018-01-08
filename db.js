var mongoose = require('mongoose');

var uri = "mongodb://user:password@ds141657.mlab.com:41657/nodejs-restful-api-db"

mongoose.connect(uri, { useMongoClient: true }, function(err){
    if(err) {
        console.log('Some problem with the connection ' +err);
    } else {
        console.log('The Mongoose connection is ready');
    }
});


import Mongo from 'mongodb';

const MongoClient = Mongo.MongoClient;

async function createDBClient({ dbUrl } = {}) {
  return await MongoClient.connect(dbUrl);
}

export default createDBClient;
