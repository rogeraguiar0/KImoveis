import { Router } from "express";

import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
} from "../controllers/user.controller";

import { isUserTokenHimselfMiddleware } from "../middlewares/users/isUserTokenHimself.middleware";
import { isUserAdminMiddleware } from "../middlewares/users/isUserAdmin.middleware";
import { userUpdateWronkKeyMiddleware } from "../middlewares/users/userUpdateWrongKey.middleware";
import { userAlreadyExistsMiddleware } from "../middlewares/users/userAlreadyExists.middleware";

import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware";
import { validateSerializerMiddleware } from "../middlewares/validateSerializer.middleware";

import { userRequest, userUpdate } from "../serializers/user.serializer";

export const userRoutes = Router();

userRoutes.get(
  "",
  verifyTokenMiddleware,
  isUserAdminMiddleware,
  listUsersController
);
userRoutes.post(
  "",
  validateSerializerMiddleware(userRequest),
  userAlreadyExistsMiddleware,
  createUserController
);
userRoutes.patch(
  "/:id",
  validateSerializerMiddleware(userUpdate),
  verifyTokenMiddleware,
  isUserTokenHimselfMiddleware,
  userUpdateWronkKeyMiddleware,
  updateUserController
);
userRoutes.delete(
  "/:id",
  verifyTokenMiddleware,
  isUserAdminMiddleware,
  deleteUserController
);
