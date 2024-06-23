import { z } from "zod";
import { sessionLoginSchema } from "./schemas";

export type SessionLogin = z.infer<typeof sessionLoginSchema>;