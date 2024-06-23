import { NextFunction, Request, Response } from "express";
import { ApiError } from "./api.error";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";

export function handleGlobalErrors(
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (error instanceof ApiError) {
        return res.status(error.statusCode).json({error: error.message})
    }

    if (error instanceof JsonWebTokenError) {
        return res.status(401).json({ error: error.message });
    }

    console.log(error);
    return res.status(500).json({ error: "Internal server error"});
}