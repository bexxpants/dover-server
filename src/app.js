
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')('session');
const app = express();

// connect to db

const db = 'mongodb://master:password@ds117758.mlab.com:17758/doverusers';
mongoose.connect(db);
const conn = mongoose.connection;
conn.once('open', () => console.log('connected'));

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(session({
  secret: 'opensesame',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));
app.listen(process.env.PORT || 8081);
