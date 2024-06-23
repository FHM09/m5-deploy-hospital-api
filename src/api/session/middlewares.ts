import { NextFunction, Request, Response } from "express";
import { ApiError } from "../@shared/errors";
import { verifyToken } from "../../configs";

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { authorization } = req.headers;

    if (!authorization) {
        throw new ApiError("Missing bearer token", 401);
    }

    const [type, token] = authorization.split(" ");

    if (type !== "Bearer") {
        throw new ApiError("Missing token Bearer prefix", 401);
    }

    res.locals.decodedToken = verifyToken(token);

    return next();
}