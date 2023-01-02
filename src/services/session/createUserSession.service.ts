import "dotenv/config";

import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";

import { IUserLogin } from "../../interfaces/users/index";

import { AppError } from "../../errors/index";

export const createUserSessionService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({
    email: email,
  });

  if (!user) throw new AppError("User or password invalid", 403);

  if (!user.isActive) throw new AppError("User or password invalid", 400);

  const validatePassword = await compare(password, user.password);

  if (!validatePassword) throw new AppError("User or password invalid", 403);

  const token = jwt.sign(
    { email: user.email },
    String(process.env.SECRET_KEY),
    {
      subject: String(user.id),
      expiresIn: "24h",
    }
  );

  return token;
};
