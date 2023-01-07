import { Request, Response, NextFunction } from "express";

export const checkHourMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const time = req.body.hour;
  const arr = time.split(":");

  const hours = +arr[0] * 3600;
  const minutes = +arr[1] * 60;

  const validTime = hours + minutes;

  if (validTime > 64800 || validTime < 28800)
    return res.status(400).json({ message: "Invalid hour" });

  return next();
};
