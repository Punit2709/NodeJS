const express = require('express')
const app = express()

// middle ware should before routes
app.set("view engine", 'ejs');
app.use(express.static('./public'));

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/profile/:username', function (req, res) {
  let name = req.params.username.toUpperCase();
  res.render(`profile`, { name })
})

app.get('/contacts', function (req, res) {
  res.render(`contacts`)
})

app.get('/error', function (req, res, next) {
  throw new Error('Path not exists');
})

app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})

app.listen(3000, () => console.log('Server Started'))