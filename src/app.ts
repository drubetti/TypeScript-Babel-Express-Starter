import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import bodyParser from 'body-parser';
import { errors as celebrateErrors } from 'celebrate';
import errorsHandler from './utils/errorsHandler';
import { loggerMiddleware } from './utils/logger';
import versionRoutes from './version/routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(loggerMiddleware);
app.use(compression());
app.use(bodyParser.json({ limit: '16mb' }));
app.use('/', versionRoutes);
app.use(celebrateErrors());
app.use(errorsHandler);

export default app;
