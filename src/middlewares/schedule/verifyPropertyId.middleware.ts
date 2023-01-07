import { Request, Response, NextFunction } from "express";

import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";

export const verifyPropertyIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const propertyId = req.body.propertyId;

  const propertyRepo = AppDataSource.getRepository(Properties);

  const findProperty = await propertyRepo.findOneBy({
    id: propertyId,
  });

  if (!findProperty)
    return res.status(404).json({ message: "Property not found" });

  return next();
};
