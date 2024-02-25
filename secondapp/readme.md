## Flash Messages

Flash messages are a means of communicating messages to the end user from inside of an application. These messages might be errors, warnings, or success types of messages. Some examples of flash messages are: “You have been successfully logged out.”

## Step for Flash Messages

- install connect-flash
- make sure setup express-session
- put connect flash in app.use function
- create flash in any route
- run app.use() on any route

## MongoDb Basic Operations

1. create
   `model.create({object here})`

2. read

- single docs
  `model.findOne()`
- many docs
  `model.find()`

3. update

4. delete

- single docs
  `model.deleteOne({condition})`
- many docs
  `model.deleteMany({condition})`

## MongoDb Intermediate Operations

1. find insensitive
   `let regex = new RegExp("^Punit$", 'i') // i for insensitive`
   `let user = await userModel.find({ username: regex });`

2. Docs have propery which is array and that array consists "value1" and "value2"
   `let user = await userModel.find({ categories: { $all: ['value1', 'value2'] } });`

3. Docs with specific date range
   `let date1 = new Date('2024-01-31');`
   `let date2 = new Date('2024-02-29');`
   `let user = await userModel.find({ dateCreated: { $gt: date1, $lt: date2} });`

4. Docs having specific field exists
   `let user = await userModel.find({ dateCreated: { $exists : true } });`

5. filter Docs with field having specific length
   `let user = await userModel.find({$expr: {$and: [{ $gte: [{ $strLenCP: '$nickname' }, 0] },{ $lte: [{ $strLenCP: '$nickname' }, 7] }]}});`

## Authorization

### Require Packges

1. express-session
2. mongoose
3. passport
4. passport-local
5. passport-local-mongoose

### Steps for Authentication and Authorization
- Install require packges
- Write app.use code in app.js file after view engine and before logger
- Setup users.js
- In index.js try register first and then other code as well 
