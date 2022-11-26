import { config } from 'dotenv';
import express from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import expressWs from 'express-ws';
import Client from './core/client/client';
import Session from './core/session/session';

config(); // .env

const port = process.env.PORT ?? 5055;
const app = express();
const server = new http.Server(app);
expressWs(app, server); // Mount method for route ws connections

// Connection Route
const sessionRouter = express.Router();

const session = new Session();
sessionRouter.ws('/session', (ws) => {
    session.addClient(new Client(ws))
});

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use('/', (req, res) => res.end())
app.use('/api', sessionRouter);

// Listen port
const serverStartHandler = () => {
	console.log('============= Server started ===============\nPort:', port);
}
server.listen({ port }, serverStartHandler);