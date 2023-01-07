import * as yup from "yup";
import { SchemaOf } from "yup";

import {
  IScheduleRequest,
  IScheduleResponse,
} from "../interfaces/schedules/index";

export const scheduleRequest: SchemaOf<IScheduleRequest> = yup.object().shape({
  userId: yup.string().required(),
  propertyId: yup.string().required(),
  date: yup.string().required(),
  hour: yup.string().required(),
});

export const scheduleResponse: SchemaOf<IScheduleResponse> = yup
  .object()
  .shape({
    propertyId: yup.string().required(),
    date: yup.string().required(),
    hour: yup.string().required(),
  });
