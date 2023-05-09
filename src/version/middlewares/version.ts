import { NextFunction, Request, Response } from 'express';
import Package from '../../../package.json' assert { type: 'json' };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (_req: Request, res: Response, _next: NextFunction) =>
  res.send(Package.version);
