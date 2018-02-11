
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  )
})

// connect to db


app.listen(process.env.PORT || 8081)

const db = 'mongodb://master:password@ds117758.mlab.com:17758/doverusers';
mongoose.connect(db);
const conn = mongoose.connection;
conn.once('open', () => console.log('connected'));
