import 'dotenv/config.js';
import express, { json } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import rateLimiter from './utils/rateLimiter.js';

const { PORT = 4000, MONGODB_URL = 'mongodb://127.0.0.1:27017/naturenas' } = process.env;

const app = express();

mongoose.connect(MONGODB_URL)
  .then(() => {
    console.log(`Server is connected to database ${MONGODB_URL}`);
  });

app.use(helmet());
app.use(cors()); // добавить настройки
app.use(json());
app.use(rateLimiter);

app.get('/', (req, res) => {
  res.send('Hiiii!!!!');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
