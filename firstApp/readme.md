## Why Express Generator

Express Generator will make folder for us, also wrire basic code for us and our save time.

## Steps For Express Generator

- install express generator globally.
- npm i express-generator -g
- To create new app
  1.open cmd
  2.move to desktop
  3.create new app : express appname --view=ejs
-Now use two commands 
  1. cd appname 
  2. npm i
- Open in vs code

## Steps for Database setup

- install mongodb
- install mongoosejs
- require and setup connection
  `mongoose.connect("mongodb://127.0.0.1:27017/MyDb");`
- make schema
  `const userSchema = mongoose.Schema({
    username: String,
    name: String,
    age: Number,
    phone: String,
})`
- create model and export

## Making session in express

- create
  `req.session.anyName = anyValue`
- read
  `req.session.anyName`
- delete
  `req.session.destroy()`

## Steps For Cookie

- sending cookie // send by browser
    `res.cookie(name, value)`
- reading cookie // read by server
    `req.cookies.name`
-deleting cookie // deleting on browser
    `res.clearCookie('name')`
