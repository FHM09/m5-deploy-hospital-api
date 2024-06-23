import express from "express";
import "reflect-metadata";
import "express-async-errors";
import { initRoutes } from "./routes";
import { handleGlobalErrors } from "./api/@shared/errors";
import cors from "cors";


export const app = express();

app.use(cors());
app.use(express.json());

initRoutes(app);

app.use(handleGlobalErrors);