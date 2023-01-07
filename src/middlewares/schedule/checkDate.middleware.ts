import { Request, Response, NextFunction } from "express";

export const checkDateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const date = new Date(req.body.date);

  const weekday = date.getDay();

  if (weekday === 6 || weekday === 7)
    return res.status(400).json({ message: "Date can not be in a weekend" });

  return next();
};
