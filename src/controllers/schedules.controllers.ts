import { Request, Response } from "express";
import { createScheduleService } from "../services/schedules/createSchedule.service";
import { listSchedulesService } from "../services/schedules/listSchedules.service";

export const listSchedulesController = async (req: Request, res: Response) => {
  const propertyId = req.params.id;

  const data = await listSchedulesService(propertyId);

  return res.status(200).json(data);
};

export const createScheduleController = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const schedule = req.body;

  const data = await createScheduleService(schedule, userId);

  return res.status(201).json(data);
};
