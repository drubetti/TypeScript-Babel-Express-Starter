import process from 'node:process';
import './utils/loadEnv';
import app from './app';
import logger from './utils/logger';

const { SERVER_PORT = '3000' } = process.env;
const port = Number.parseInt(SERVER_PORT, 10);

const onAppListen = (error?: Error) => {
	if (error) throw error;

	logger.info(`Server is running on port ${port}!`);
};

app.listen(port, onAppListen);
