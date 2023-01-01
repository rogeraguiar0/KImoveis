import { Request, Response } from "express";
import { createUserSessionService } from "../services/session/createUserSession.service";

export const createSessionController = async (req: Request, res: Response) => {
  const user = req.body;

  const token = await createUserSessionService(user);

  return res.status(200).json({ token });
};
