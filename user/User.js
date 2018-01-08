var mongoose = require('mongoose');  

var UserSchema = new mongoose.Schema({   //create the schema for the user.
  name: String,
  email: String,
  password: String
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');


