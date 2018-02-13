
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import users from './routes/users';

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

mongoose.connect(process.env.MONGODB_URL);

app.use('/api/users', users);

app.listen(process.env.PORT || 8082, () =>
  console.log(`listen in localhost:${process.env.PORT || 8082}`));
