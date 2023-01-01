import * as yup from "yup";
import { SchemaOf } from "yup";
import { string } from "yup/lib/locale";

import {
  IUser,
  IUserLogin,
  IUserRequest,
  IUserUpdate,
} from "../interfaces/users/index";

export const userResponse: SchemaOf<IUser> = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().required(),
  isAdm: yup.boolean().required(),
  isActive: yup.boolean().required(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
});

export const userRequest: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  isAdm: yup.boolean().required(),
});

export const userUpdate: SchemaOf<IUserUpdate> = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().notRequired(),
  password: yup.string().notRequired(),
});

export const userList: SchemaOf<IUser[]> = yup.array(userResponse);

export const userSession: SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});
