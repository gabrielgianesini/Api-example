import "dotenv/config";
import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes)

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    return response.status(500).json({
      status: 'Error',
      message: 'Internal error',
    })
  },
)


export { app }