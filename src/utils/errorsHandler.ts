import { NextFunction, Request, Response } from 'express';

const errorsHandler = (err: any, req: Request, res: Response, _next: NextFunction) => {
  const { expose = false, message = '', statusCode = 500 } = err || {};
  res.status(statusCode).send(expose ? { message } : {});
};

export default errorsHandler;
