import { config as initDotenv} from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import { Server as HTTPServer } from 'http';
import { AppServer } from './modules/app-server/app-server';
import SessionService from './modules/sessions/session-service/session-service';

initDotenv();

const port = +process.env.PORT || 5055;
const app = express();

const appServer = new AppServer(
    new HTTPServer(app),
    new SessionService()
);

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Run
appServer.run(port, () => console.log('============= Server Started ===============\nPort:', port));