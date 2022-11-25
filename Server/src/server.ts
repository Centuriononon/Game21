import express from 'express';
import { config } from 'dotenv';
config();

const port = 5055 ?? process.env.PORT;

const app = express();

app.use(express.json());

const run = async () => {
	try {
		app.listen({ port });
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

run();