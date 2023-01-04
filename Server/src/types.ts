import { Request, Response } from "express";

export type IncomingMessageHandler = (req: Request, res: Response) => void;