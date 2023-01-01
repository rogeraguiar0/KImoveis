import { Request, Response, NextFunction } from "express";

import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

export const userAlreadyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.body;

  const userRepo = AppDataSource.getRepository(User);

  const findUser = await userRepo.findOneBy({
    email: user.email,
  });

  if (findUser) return res.status(409).json({ message: "User already exists" });

  return next();
};
