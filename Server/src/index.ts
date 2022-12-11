import { config as initDotenv} from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import { createServer } from 'http';
import { Server } from './modules/server/server';
import SessionService from './modules/sessions/session-service/session-service';

initDotenv();

const port = +process.env.PORT || 5055;
const app = express();

const appServer = new Server(
    createServer(app),
    new SessionService()
);

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Listen port
appServer.run(port, () => {
    console.log('============= Server Started ===============\nPort:', port);
})