import dotenv from 'dotenv';
dotenv.config({ path: './.env.development.local' });
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';

import routes from './routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/v1', routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    return response.status(500).json({
      status: 'Error',
      message: 'Internal error',
    });
  },
);

export { app };
