import { NextFunction, Request, Response } from 'express';

const errorsHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
) => {
  const { message = '', statusCode = 500 } = err || {};
  res.status(statusCode).send({ message });
};

export default errorsHandler;
