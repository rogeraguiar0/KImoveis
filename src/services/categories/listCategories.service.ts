import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";

import { ICategoryRequest } from "../../interfaces/categories";

export const listCategoriesService = async (): Promise<ICategoryRequest[]> => {
  const categoryRepo = AppDataSource.getRepository(Categories);

  const categories = categoryRepo.find();

  return categories;
};
