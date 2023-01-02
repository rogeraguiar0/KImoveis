import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";

import { AppError } from "../../errors";

export const listPropertiesByCategoryService = async (id: string) => {
  const categoryRepo = AppDataSource.getRepository(Categories);

  const validId = await categoryRepo.findOne({
    where: {
      id: id,
    },
  });

  if (!validId) throw new AppError("Invalid id", 404);

  const findProperties = await categoryRepo.findOne({
    where: {
      id: id,
    },
    relations: {
      properties: true,
    },
  });

  if (!findProperties) throw new AppError("Properties does not exists", 404);

  return findProperties;
};
