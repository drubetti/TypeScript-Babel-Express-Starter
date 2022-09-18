import { NextFunction, Request, Response } from 'express';
import Package from '../../../package.json' assert { type: 'json' };

export default (_req: Request, res: Response, _next: NextFunction) =>
  res.send(Package.version);
