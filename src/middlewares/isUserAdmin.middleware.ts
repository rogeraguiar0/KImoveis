import { Request, Response, NextFunction } from "express";

import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

export const isUserAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;

  const userRepo = AppDataSource.getRepository(User);

  const findUser = await userRepo.findOneBy({
    id: user.id,
  });

  if (!findUser?.isAdm)
    return res.status(403).json({ message: "Missing admin permission" });

  return next();
};
