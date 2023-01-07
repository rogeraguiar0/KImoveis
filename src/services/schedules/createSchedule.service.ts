import AppDataSource from "../../data-source";
import { Schedules } from "../../entities/schedules_user_properties.entity";

import { IScheduleResponse } from "../../interfaces/schedules";

export const createScheduleService = async (
  schedule: IScheduleResponse,
  id: string
): Promise<Object> => {
  const scheduleRepo = AppDataSource.getRepository(Schedules);

  const newSchedule = {
    ...schedule,
    userId: { id: id },
  };

  const createdSchedule = scheduleRepo.create(newSchedule);
  await scheduleRepo.save(createdSchedule);

  return { message: "Schedule created" };
};
