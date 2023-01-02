import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";

import { AppError } from "../../errors";

import { ICategoryRequest } from "../../interfaces/categories";

export const createCategoryService = async (
  category: ICategoryRequest
): Promise<ICategoryRequest> => {
  const categoryRepo = AppDataSource.getRepository(Categories);

  const findCategory = await categoryRepo.findOneBy({
    name: category.name,
  });

  if (findCategory) throw new AppError("Category already exists", 409);

  const createdCategory = categoryRepo.create(category);
  await categoryRepo.save(createdCategory);

  return createdCategory;
};
