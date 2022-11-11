const express = require('express');
require('dotenv').config() //used for environment vars. to hold secret info!
const ejs = require('ejs');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

const workoutRoutes = require('./routes/workouts') //pulls workout routes
const userRoutes = require('./routes/user') //pulls workout routes

var app = express();
app.use(express.json()) // checks if theres JSON with any request coming in

app.use((req, res, next) => {
    console.log(req.path, req.method) //logger so we know the path/req method
    next()
})

//THIS DISPLAYS THE STUFF FROM ROUTES
app.use('/api/workouts', workoutRoutes) // grabs all routes from ./routes/workouts.js
app.use('/api/user', userRoutes) // grabs all routes from ./routes/user.js

var db = mongoose.connection;
db.once('open', function () {});
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

app.set('views', path.join(__dirname, '../client/views'));
app.set('view engine', 'ejs');	
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('../client/views'));
var index = require('./routes/index');
app.use('/', index);

// connect to mongo db
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () => {
      console.log('Connected to Mongo DB and server is listening on port http://localhost:'+process.env.PORT)
  })
}).catch((error) => {console.log(error)})