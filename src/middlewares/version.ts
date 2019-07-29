import { NextFunction, Request, Response } from 'express';
import packageDotJson from '../../package.json';

const { version } = packageDotJson;

export default (_req: Request, res: Response, _next: NextFunction) => res.send(version);
