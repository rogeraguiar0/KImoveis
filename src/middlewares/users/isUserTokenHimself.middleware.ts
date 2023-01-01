import { Request, Response, NextFunction } from "express";

import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

export const isUserTokenHimselfMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id;
  const user = req.user;

  const userRepo = AppDataSource.getRepository(User);

  const findUser = await userRepo.findOneBy({
    email: user.email,
  });

  if (findUser?.isAdm || findUser?.id === userId) return next();

  return res.status(401).json({ message: "Missing admin permission" });
};
