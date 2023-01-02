import { Router } from "express";

import {
  createCategoryController,
  listCategoriesController,
  listPropertiesByCategoryController,
} from "../controllers/categories.controllers";

import { isUserAdminMiddleware } from "../middlewares/isUserAdmin.middleware";
import { validateSerializerMiddleware } from "../middlewares/validateSerializer.middleware";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";

import { categoryRequest } from "../serializers/category.serializer";

export const categoriesRoutes = Router();

categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get("/:id/properties", listPropertiesByCategoryController);
categoriesRoutes.post(
  "",
  validateSerializerMiddleware(categoryRequest),
  verifyTokenMiddleware,
  isUserAdminMiddleware,
  createCategoryController
);
