declare global {
  namespace Express {
    interface Request {
      validatedBody: object;
      user: {
        id: string;
        email: string;
      };
    }
  }
}

export {};
