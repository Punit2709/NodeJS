const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');
/* GET users listing. */

mongoose.connect('mongodb://127.0.0.1:27017/Login');

const userSchema = mongoose.Schema({
  username: String,
  password:String,
  email: String,
});

userSchema.plugin(plm);
const userModel = mongoose.model('users', userSchema);
module.exports = userModel;
