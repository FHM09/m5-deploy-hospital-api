import { Router } from "express";
import { SessionController } from "./controller";
import { validateBody } from "../@shared/validators";
import { sessionLoginSchema } from "./schemas";


export const sessionRouter = Router();
const sessionController = new SessionController();

sessionRouter.post("",
    validateBody(sessionLoginSchema),
    sessionController.login);