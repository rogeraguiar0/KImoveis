import { Request, Response } from "express";

import { createCategoryService } from "../services/categories/createCategory.service";
import { listCategoriesService } from "../services/categories/listCategories.service";
import { listPropertiesByCategoryService } from "../services/categories/listPropertiesByCategory.service";

export const listCategoriesController = async (req: Request, res: Response) => {
  const data = await listCategoriesService();

  return res.status(200).json(data);
};

export const listPropertiesByCategoryController = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id;

  const data = await listPropertiesByCategoryService(id);

  return res.status(200).json(data);
};

export const createCategoryController = async (req: Request, res: Response) => {
  const category = req.body;

  const data = await createCategoryService(category);

  return res.status(201).json(data);
};
