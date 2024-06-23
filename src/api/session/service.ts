import { prisma } from "../../../prisma/prisma.client";
import { generateToken } from "../../configs";
import { SessionLogin } from "./interfaces";
import * as bcrypt from "bcryptjs";
import { InvalidCredentialsError } from "./errors";



export class SessionService {
    public login = async (payload: SessionLogin) => {
        const account = await prisma.account.findUnique({
            where: { email: payload.email }
        });

        if(!account) {
            throw new InvalidCredentialsError();
        }

        const passwordPatch = await bcrypt.compare(
            payload.password,
            account.password
        );

        if(!passwordPatch) {
            throw new InvalidCredentialsError();
        }  


        const token = generateToken({ fullName: account.fullName, role: account.role }, account.id)

        return { token };
    };
}