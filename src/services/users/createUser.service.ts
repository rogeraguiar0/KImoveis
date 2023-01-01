import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/index";

import { IUser, IUserRequest } from "../../interfaces/users";
import { userResponse } from "../../serializers/user.serializer";

export const createUserService = async (
  newUser: IUserRequest
): Promise<IUser> => {
  const userRepo = AppDataSource.getRepository(User);

  const findUser = await userRepo.findOneBy({
    email: newUser.email,
  });

  if (findUser) throw new AppError("User already exists", 400);

  const createdUser = userRepo.create(newUser);
  await userRepo.save(createdUser);

  const userWithoutPassword = await userResponse.validate(createdUser, {
    stripUnknown: true,
  });

  return userWithoutPassword;
};
