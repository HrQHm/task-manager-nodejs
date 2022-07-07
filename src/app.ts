import "reflect-metadata";
import 'express-async-errors';
import ConnectDB from './database/index';
import express, { Request, Response, NextFunction } from 'express';
import { router } from './routes';
import { AppError } from "./shared/errors/AppError";

ConnectDB()

const app = express();
app.use(express.json());

app.use('/api/v1', router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {

  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: `Internal Server Error ${err.message}`,
  })
})

export { app };