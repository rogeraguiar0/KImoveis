import { Request, Response } from "express";

import { createPropertyService } from "../services/properties/createProperty.service";
import { listPropertiesService } from "../services/properties/listProperties.service";

export const listPropertiesController = async (req: Request, res: Response) => {
  const data = await listPropertiesService();

  return res.status(200).json(data);
};

export const createPropertyController = async (req: Request, res: Response) => {
  const property = req.body;

  const data = await createPropertyService(property);

  return res.status(201).json(data);
};
