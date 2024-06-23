import jwt from "jsonwebtoken";
import { parsedEnv } from "./env.config";

export function generateToken(payload: object = {}, accountId: number){
    const secret = parsedEnv.JWT_SECRET;
    
    return jwt.sign(payload, secret, {
        expiresIn: "1h",
        subject: String(accountId)
    });
}

export function verifyToken(token: string) {
    const secret = parsedEnv.JWT_SECRET;
    
    const jwtPayload = jwt.verify(token, secret);

    return jwtPayload;
}