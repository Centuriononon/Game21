import { config } from 'dotenv';
import express, { Request } from 'express';
import cookieParser from 'cookie-parser';
import instanceWS from 'express-ws';
import Client from './core/client/client';
import Session from './core/session/session';
import { WebSocket } from 'ws';
import { isNumberObject } from 'util/types';

config(); // .env

const port = process.env.PORT ?? 5055;
const { app } = instanceWS(express());

// Connection Route
const session = new Session();

const wsConnectionHandler = (ws: WebSocket, req: Request) => {
    const id = req.query.id;
    console.log(id)
    if (id) session.connect(new Client(ws))
    
}
app.ws('/session', wsConnectionHandler)

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use('/', (req, res) => res.end())

// Listen port
const serverStartHandler = () => {
	console.log('============= Server started ===============\nPort:', port);
}
app.listen({ port }, serverStartHandler);