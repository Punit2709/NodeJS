const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/MyDb");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  phone: String,
})

module.exports = mongoose.model('users', userSchema);;