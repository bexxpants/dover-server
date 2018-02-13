
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
import signUp from '../models/signUp';

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URL);

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.post('/Api/signup', (req, res) =>{
  var db = req.db;
  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email;
  var newSignUp = new signUp({
    username: username,
    password: password,
    email: email
  });

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

app.listen(process.env.PORT || 8081, () =>
  console.log(`listen in localhost:${process.env.PORT}`));
