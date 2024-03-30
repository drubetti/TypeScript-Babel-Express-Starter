import { NextFunction, Request, Response } from 'express';
import { version } from '../../../package.json';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (_req: Request, res: Response, _next: NextFunction) =>
  res.send(version);
