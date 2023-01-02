import * as yup from "yup";
import { SchemaOf } from "yup";

import { IAddressRequest, IPropertyRequest } from "../interfaces/properties";

const adress: SchemaOf<IAddressRequest> = yup.object().shape({
  district: yup.string().required(),
  zipCode: yup.string().required().max(8, "Invalid zipCode"),
  number: yup.string().notRequired(),
  city: yup.string().required(),
  state: yup.string().required().max(2, "Invalid state"),
});

export const propertyResponse: SchemaOf<IPropertyRequest> = yup.object().shape({
  value: yup.number().required(),
  size: yup.number().required(),
  address: adress.required(),
  categoryId: yup.string().required(),
});

export const propertyList: SchemaOf<IPropertyRequest[]> =
  yup.array(propertyResponse);
