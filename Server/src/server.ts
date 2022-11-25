import { config } from 'dotenv';
import express from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import expressWs from 'express-ws';

config(); // .env

const port = process.env.PORT ?? 5055;
const app = express();
const server = new http.Server(app);
expressWs(app, server); // Mount method for route ws connections

// Routes
const sessionRouter = express.Router();

sessionRouter.ws('/session', (ws) => {
    ws.on('message', (m) => ws.send(m));
})

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