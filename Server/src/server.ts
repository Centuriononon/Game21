import { config } from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import { WebSocket } from 'ws';
import { Server as WSServer } from 'ws';
import { createServer, IncomingMessage } from 'http';
import url from 'url';

config(); // .env

const port = process.env.PORT ?? 5055;
const app = express();
const server = createServer(app);
const wss = new WSServer({ noServer: true });

// Middlewares
app.use(express.json());
app.use(cookieParser());

const connectionHandler = (sessionId: string, ws: WebSocket) => {
    console.log('connection')
    console.log('session id is', sessionId)
}

server.on('upgrade', (request, socket, head) => {
    const parsed = url.parse(request.url || '', true);
    const id = String(parsed.query.id);
    const pathname = parsed.pathname;

    if (pathname === '/session' && id) {
        wss.handleUpgrade(
            request, socket, head, 
            (ws) => connectionHandler(id, ws)
        );
    };
})



// Listen port
const serverStartHandler = () => {
	console.log('============= Server started ===============\nPort:', port);
}
server.listen({ port }, serverStartHandler);