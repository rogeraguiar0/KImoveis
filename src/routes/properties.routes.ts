import { Router } from "express";

import {
  createPropertyController,
  listPropertiesController,
} from "../controllers/properties.controllers";

import { isUserAdminMiddleware } from "../middlewares/isUserAdmin.middleware";
import { validateSerializerMiddleware } from "../middlewares/validateSerializer.middleware";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";

import { propertyResponse } from "../serializers/property.serializer";

export const propertiesRoutes = Router();

propertiesRoutes.get("", listPropertiesController);
propertiesRoutes.post(
  "",
  verifyTokenMiddleware,
  isUserAdminMiddleware,
  validateSerializerMiddleware(propertyResponse),
  createPropertyController
);
