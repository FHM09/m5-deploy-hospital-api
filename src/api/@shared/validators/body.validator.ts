import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema } from "zod";

export function validateBody(schema: ZodSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
           req.body = schema.parse(req.body)  
        } catch (error) {
            if(error instanceof ZodError){
                return res.status(400).json({ error: error.errors });
            }

            return res.status(500).json({ error: "Internal server error "});
        }

        return next();
    };
}