import 'source-map-support/register.js';
import process from 'process';
import './utils/loadEnv.js';
import app from './app.js';
import logger from './utils/logger.js';

const { SERVER_PORT = '3000' } = process.env;
const port = parseInt(SERVER_PORT);

const onAppListen = (error?: Error) => {
  if (error) throw error;

  logger.info(`Server is running on port ${port}!`);
};

app.listen(port, onAppListen);
