import { Router } from "express";

import { createSessionController } from "../controllers/session.controller";

import { validateSerializerMiddleware } from "../middlewares/validateSerializer.middleware";

import { userSession } from "../serializers/user.serializer";

export const sessionRoutes = Router();

sessionRoutes.post(
  "",
  validateSerializerMiddleware(userSession),
  createSessionController
);
