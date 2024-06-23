import { NextFunction, Request, Response } from "express";
import { ApiError } from "../@shared/errors";

export function isAccountOwner(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { id } = req.params;

    const { accountId } = res.locals;

    if (accountId !== id) {
        throw new ApiError("You don't have permission to perform this action", 403);
    }

    return next();
}

export function isNurse(req: Request, res: Response, next: NextFunction) {
    const { decodedToken } = res.locals;

    if (decodedToken.role !== "NURSE") {
        throw new ApiError("You don't have permission to perform this action", 403);
    }

    req.body.createdById = Number(decodedToken.sub);

    return next();
}