import { Request, Response, NextFunction } from "express";

export const userUpdateWronkKeyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const updateUser = Object.keys(req.body);

  if (
    updateUser.includes("isAdm") ||
    updateUser.includes("isActive") ||
    updateUser.includes("id")
  )
    return res.status(401).json({ message: "Invalid body request" });

  return next();
};
