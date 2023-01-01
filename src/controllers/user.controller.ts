import { Request, Response } from "express";

import { createUserService } from "../services/users/createUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { listUsersService } from "../services/users/listUsers.service";
import { updateUserService } from "../services/users/updateUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const user = req.body;

  const data = await createUserService(user);

  return res.status(201).json(data);
};

export const listUsersController = async (req: Request, res: Response) => {
  const data = await listUsersService();

  return res.status(200).json(data);
};

export const updateUserController = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const userData = req.body;

  const data = await updateUserService(userData, userId);

  return res.status(200).json(data);
};

export const deleteUserController = async (req: Request, res: Response) => {
  const userId = req.params.id;

  const data = await deleteUserService(userId);

  return res.status(204).json(data);
};
