import "reflect-metadata";
import "express-async-errors";
import express from "express";

import { sessionRoutes } from "./routes/session.routes";

import { handleError } from "./errors/index";
import { userRoutes } from "./routes/user.routes";

const app = express();
app.use(express.json());

app.use("/login", sessionRoutes);
app.use("/users", userRoutes);

app.use(handleError);

export default app;
