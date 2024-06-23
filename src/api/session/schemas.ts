import { accountSchema } from "../account/schemas";


export const sessionLoginSchema = accountSchema.pick({
    email: true,
    password: true,
});
