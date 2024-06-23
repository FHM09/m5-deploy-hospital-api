import { Router } from "express";
import { AccountController } from "./controller";
import { validateBody } from "../@shared/validators";
import { accountCreateSchema, accountUpdateSchema } from "./schemas";
import { isAuthenticated } from "../session";
import { isAccountOwner } from "./middlewares";
import { AccountService } from "./service";
import { container } from "tsyringe";

export const accountRouter = Router();

container.registerSingleton("AccountService", AccountService);
const accountController = container.resolve(AccountController);

//const accountService = new AccountService();
//const accountController = new AccountController();

accountRouter.post(
    "",
    validateBody(accountCreateSchema),
    accountController.create
);

accountRouter.get("", accountController.findAll);

accountRouter.patch(
    "/:id",
    isAuthenticated,
    isAccountOwner,
    validateBody(accountUpdateSchema),
    accountController.partialUpdate
);