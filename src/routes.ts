import { accountRouter } from "./api/account/router";
import { Express, Router } from "express";
import { sessionRouter } from "./api/session";
import { patientRouter } from "./api/patient";
import { swaggerRouter } from "./configs";



export function initRoutes(app: Express) {
    const v1Router = Router();


    v1Router.use("/v1/accounts", accountRouter);
    v1Router.use("/v1/login", sessionRouter);
    v1Router.use("/v1/patients", patientRouter);
    v1Router.use("/v1/docs", swaggerRouter);

    app.use("/api", v1Router);
}

