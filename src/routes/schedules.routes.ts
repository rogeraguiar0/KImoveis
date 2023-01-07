import { Router } from "express";

import {
  createScheduleController,
  listSchedulesController,
} from "../controllers/schedules.controllers";

import { isUserAdminMiddleware } from "../middlewares/isUserAdmin.middleware";
import { checkDateMiddleware } from "../middlewares/schedule/checkDate.middleware";
import { checkHourMiddleware } from "../middlewares/schedule/checkHour.middleware";
import { verifyPropertyIdMiddleware } from "../middlewares/schedule/verifyPropertyId.middleware";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";

export const schedulesRouter = Router();

schedulesRouter.get(
  "/properties/:id",
  verifyTokenMiddleware,
  isUserAdminMiddleware,
  listSchedulesController
);
schedulesRouter.post(
  "/",
  verifyTokenMiddleware,
  checkDateMiddleware,
  checkHourMiddleware,
  verifyPropertyIdMiddleware,
  createScheduleController
);
