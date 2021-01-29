import express from 'express';
import bodyParser from 'body-parser';
import { RegisterRoutes } from './generated/routes';

export const app = express();

// Use body parser to read sent json payloads
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

RegisterRoutes(app);

app.use('*', (_req, res) => {
    res.status(404).json({error: 'notFound'});
});
