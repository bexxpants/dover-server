
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import users from './routes/users';

dotenv.config();
const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL);

app.use('/api/users', users);

app.listen(process.env.PORT || 8081, () =>
  console.log(`listen in localhost:${process.env.PORT}`));
