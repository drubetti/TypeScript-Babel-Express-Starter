import type { NextFunction, Request, Response } from 'express';
import { version } from '../../../package.json';

export default (_req: Request, res: Response, _next: NextFunction) =>
	res.send(version);
