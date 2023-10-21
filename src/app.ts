import process from 'process';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import bodyParser from 'body-parser';
import { errors as celebrateErrors } from 'celebrate';
import errorsHandler from './utils/errorsHandler.js';
import versionRoutes from './version/routes/index.js';

const { MORGAN_FORMAT = 'combined' } = process.env;
const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan(MORGAN_FORMAT));
app.use(compression());
app.use(bodyParser.json({ limit: '16mb' }));
app.use('/', versionRoutes);
app.use(celebrateErrors());
app.use(errorsHandler);

export default app;
