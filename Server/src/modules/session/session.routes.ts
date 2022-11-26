import { Router } from 'express';

const sessionRouter = Router();

sessionRouter.post('/session', () => console.log('create a session'));

export default sessionRouter;