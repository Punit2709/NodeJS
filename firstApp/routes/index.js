var express = require('express');
var router = express.Router();
const userModel = require('./users')

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', async function (req, res) {
  req.session.balle = 'hello';
  const createdUser = await userModel.create({
    username: "Punit2709",
    name: "Punit",
    age: 20,
    phone: "+91951083539",
  });

  await userModel.create({
    username: "Harsh2405",
    name: "Harhs",
    age: 19,
    phone: "+91951083539",
  });

  res.send(createdUser);
});

router.get('/allUsers', async function (req, res) {
  let allUsers = await userModel.find({ age: 19 });
  res.send(allUsers);
})

router.get('/delete', async function (req, res) {
  let deletedUser = await userModel.deleteMany({ age: { $gt: 2 } });
  res.send(deletedUser);
  console.log(req.session);
})

module.exports = router;
