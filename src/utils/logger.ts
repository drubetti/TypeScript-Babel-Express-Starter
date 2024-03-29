import process from 'node:process';
import pino, { type TransportTargetOptions } from 'pino';
import pinoHttp from 'pino-http';

const { NODE_ENV = '' } = process.env;
const isProduction = NODE_ENV === 'production';
const isStaging = NODE_ENV === 'staging';
const isTest = NODE_ENV === 'test';
const isDevelopment = !(isProduction || isStaging);
const isLoggerEnabled = !isTest;
const targets: TransportTargetOptions[] = [];

if (isDevelopment) {
	targets.push({
		target: 'pino-pretty',
		options: {
			colorize: true,
		},
	});
} else {
	targets.push({
		target: 'pino/file',
		options: { destination: 1 }, // this writes to STDOUT
	});
}

const transport = { targets };

export const logger = pino({
	enabled: isLoggerEnabled,
	transport,
});

export const loggerMiddleware = pinoHttp({
	autoLogging: !isDevelopment,
	enabled: isLoggerEnabled,
	transport,
});

export default logger;
