import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup/lib/schema";

export const validateSerializerMiddleware =
  (serializer: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validate = await serializer.validate(req.body, {
        abortEarly: true,
        stripUnknown: true,
      });

      req.validatedBody = validate;

      return next();
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  };
