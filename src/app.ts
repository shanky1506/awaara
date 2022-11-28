import express, { Express } from 'express';
const app: Express = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
import logger from 'morgan';

app.use(logger('short'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

import indexRouter from './routes';
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
