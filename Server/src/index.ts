import { config as initDotenv} from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import { Server as HTTPServer } from 'http';
import SessionRepo from './modules/sessions/session-repo/session-repo';
import SessionService from './modules/sessions/session-service/session-service';
import AppServer from './modules/server/server/server';
import AppService from './modules/server/service/service';
import WSService from './modules/server/wsService/ws-service';

initDotenv();

const port = +process.env.PORT || 5055;
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Server
const appServer = new AppServer(
    new HTTPServer(app),
    new AppService(
        new SessionService(
            new SessionRepo()
        )
    ),
    new WSService()
);

// Run
try {
    appServer.run(port, `Server is up and running at port ${port} 🚀`);
} catch (er) {
    console.log('Server was not successfully started 💥');
    throw er;
};