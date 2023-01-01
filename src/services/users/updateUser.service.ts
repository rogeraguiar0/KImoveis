import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/index";
import { IUser, IUserUpdate } from "../../interfaces/users";
import { userResponse } from "../../serializers/user.serializer";

export const updateUserService = async (
  userData: IUserUpdate,
  userId: string
): Promise<IUser> => {
  const userRepo = AppDataSource.getRepository(User);

  const findUser = await userRepo.findOneBy({
    id: userId,
  });

  if (!findUser) throw new AppError("Invalid id", 404);

  const updatedUser = userRepo.create({
    ...findUser,
    ...userData,
  });
  await userRepo.save(updatedUser);

  const updatedUserWithoutPassword = await userResponse.validate(updatedUser, {
    stripUnknown: true,
  });

  return updatedUserWithoutPassword;
};
