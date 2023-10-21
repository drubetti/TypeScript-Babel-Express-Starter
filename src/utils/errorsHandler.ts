import { NextFunction, Request, Response } from 'express';

const errorsHandler = (
	// biome-ignore lint: error must be "any"
	err: any,
	req: Request,
	res: Response,
	_next: NextFunction,
) => {
	const { message = '', statusCode = 500 } = err || {};
	res.status(statusCode).send({ message });
};

export default errorsHandler;
