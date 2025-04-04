import process from 'process';
import './utils/loadEnv';
import app from './app';
import logger from './utils/logger';

const { SERVER_PORT = '3000' } = process.env;
const port = parseInt(SERVER_PORT);

const onAppListen = (error?: Error) => {
  if (error) throw error;

  logger.info(`Server is running on port ${port}!`);
};

app.listen(port, onAppListen);
