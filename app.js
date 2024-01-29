import 'dotenv/config.js';
import express, { json } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import multer from 'multer';
import rateLimiter from './utils/rateLimiter.js';
import routes from './routes/index.js';

const { PORT, MONGODB_URL } = process.env;

const app = express();

mongoose.connect(MONGODB_URL)
  .then(() => {
    console.log(`Server is connected to database ${MONGODB_URL}`);
  });

app.use(helmet());
app.use(cors()); // добавить настройки
app.use(json());
app.use(rateLimiter);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

app.use(upload.single('photo'));
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
