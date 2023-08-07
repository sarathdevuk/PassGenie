import { NextFunction, Request, Response } from "express";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import AppError from "../utils/errors";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      error: { success: false, message: err.message },
    });
  } else if (
    err instanceof TokenExpiredError ||
    err instanceof JsonWebTokenError
  ) {
    res.status(401).json({
      error: {
        success: false,
        tokenExpired: true,
        message: "token expired or malformed ",
      },
    });
  } else {
    res
      .status(500)
      .json({ error: { success: false, message: "Something went wrong" } });
  }
};


export default errorHandler