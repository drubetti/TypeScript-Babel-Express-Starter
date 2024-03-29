import process from 'node:process';
import './utils/loadEnv';
import app from './app';
import logger from './utils/logger';

const { SERVER_PORT = '3000' } = process.env;
const port = Number.parseInt(SERVER_PORT);

app.listen(port, () => logger.info(`Server is running on port ${port}!`));
