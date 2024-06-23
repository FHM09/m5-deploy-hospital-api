import { z } from "zod";
import { accountCreateSchema, accountSchema, accountUpdateSchema, accountWithoutPasswordSchema } from "./schemas";

export type Account = z.infer<typeof accountSchema>;
export type AccountCreate = z.infer<typeof accountCreateSchema>;
export type AccountUpdate = z.infer<typeof accountUpdateSchema>;
export type AccountWithoutPassword = z.infer<typeof accountWithoutPasswordSchema>;

export interface IAccountService {
    findByEmail(email: string): Promise<Account | null>;
    create(payload: AccountCreate): Promise<AccountWithoutPassword>;
    findAll(): Promise<AccountWithoutPassword[]>;
    findById(id: number): Promise<AccountWithoutPassword>;
    partialUpdate(id: number, payload: AccountUpdate): Promise<AccountWithoutPassword>;
}