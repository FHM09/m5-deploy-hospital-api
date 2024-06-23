import { Request, Response } from "express";
import { IAccountService } from "./interfaces";
import { inject, injectable } from "tsyringe";

@injectable()
export class AccountController {
    constructor(
        @inject("AccountService") private accountService: IAccountService
    ) {};

    public create = async (req: Request, res: Response) => {
        const account = await this.accountService.create(req.body);

        return res.status(201).json(account);
    };

    public findAll = async (req: Request, res: Response) => {
        const accounts = await this.accountService.findAll();

        return res.json(accounts);
    };

    public partialUpdate = async (req: Request, res: Response) => {
        const account = await this.accountService.partialUpdate(
            Number(req.params.id),
            req.body
        );

        return res.json(account);
    };
}