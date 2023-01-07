import "reflect-metadata";
import "express-async-errors";
import express from "express";

import { handleError } from "./errors/index";

import { sessionRoutes } from "./routes/session.routes";
import { userRoutes } from "./routes/user.routes";
import { categoriesRoutes } from "./routes/categories.routes";
import { propertiesRoutes } from "./routes/properties.routes";
import { schedulesRouter } from "./routes/schedules.routes";

const app = express();
app.use(express.json());

app.use("/login", sessionRoutes);
app.use("/users", userRoutes);
app.use("/categories", categoriesRoutes);
app.use("/properties", propertiesRoutes);
app.use("/schedules", schedulesRouter);

app.use(handleError);

export default app;
