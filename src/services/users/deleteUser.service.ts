import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/index";

export const deleteUserService = async (userId: string) => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({
    id: userId,
  });

  if (!user) throw new AppError("User not found", 404);

  if (user.isActive === false)
    throw new AppError("Can not delete user that already is deleted", 400);

  user.isActive = false;
  await userRepo.save(user);

  return {};
};
