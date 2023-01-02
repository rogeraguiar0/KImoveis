import "reflect-metadata";
import "express-async-errors";
import express from "express";

import { sessionRoutes } from "./routes/session.routes";

import { handleError } from "./errors/index";
import { userRoutes } from "./routes/user.routes";
import { categoriesRoutes } from "./routes/categories.routes";
import { propertiesRoutes } from "./routes/properties.routes";

const app = express();
app.use(express.json());

app.use("/login", sessionRoutes);
app.use("/users", userRoutes);
app.use("/categories", categoriesRoutes);
app.use("/properties", propertiesRoutes);

app.use(handleError);

export default app;
