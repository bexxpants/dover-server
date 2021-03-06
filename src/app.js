import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import auth from './routes/auth';
import users from './routes/users';
import projects from './routes/projects';
import bio from './routes/bio';
import proposals from './routes/proposals';

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(process.env.MONGODB_URL);

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/projects', projects);
app.use('/api/bio', bio);
app.use('/api/proposals', proposals);

app.listen(process.env.PORT || 8082, () =>
  console.log(`listen in localhost:${process.env.PORT || 8082}`),
);
