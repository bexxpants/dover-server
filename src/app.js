
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
var signUp = require('../models/signup')
const app = express();
app.listen(process.env.PORT || 8081);
// connect to db

const db = 'mongodb://master:password@ds117758.mlab.com:17758/doverusers';
mongoose.connect(db);
const conn = mongoose.connection;
conn.once('open', () => console.log('connectedis'));

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.get('/', (req, res) =>{
  res.send('Please use /Api for Api functions');
})

app.post('/Api/signup', (req, res) =>{
  var db = req.db;
  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email;
  var newSignUp = new signUp({
    username: username,
    password: password,
    email: email
  })

newSignUp.save(function (error) {
   if (error) {
     console.log(error)
   }
   res.send({
     success: true,
     message: 'Post saved successfully!'
   })
 })
})
