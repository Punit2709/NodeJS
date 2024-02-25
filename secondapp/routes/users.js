const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/App2');

const userSchema = mongoose.Schema({
  username: String,
  nickname: String,
  discription: String,
  categories: {
    type: Array,
    default: [],
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  }
})

userSchema.plugin(plm);
module.exports = mongoose.model('users', userSchema);
