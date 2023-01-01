import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import { IUser } from "../../interfaces/users";
import { userList } from "../../serializers/user.serializer";

export const listUsersService = async (): Promise<IUser[] | undefined> => {
  const userRepo = AppDataSource.getRepository(User);

  const users = await userRepo.find();

  if (!users) {
    throw new AppError("Users not found", 404);
  }

  const usersWithoutPassword = await userList.validate(users, {
    stripUnknown: true,
  });

  return usersWithoutPassword;
};
