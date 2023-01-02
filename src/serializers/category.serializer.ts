import * as yup from "yup";
import { SchemaOf } from "yup";

import { ICategoryRequest } from "../interfaces/categories/index";

export const categoryRequest: SchemaOf<ICategoryRequest> = yup.object().shape({
  name: yup.string().required(),
});
