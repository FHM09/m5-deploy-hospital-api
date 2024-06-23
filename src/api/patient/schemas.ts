import { z } from "zod";

export const patientSchema = z.object({
    id: z.number().positive().int(),
    firstName: z.string().max(100),
    lastName: z.string().max(100),
    email: z.string().email().max(100),
    phoneNumber: z.string().max(20),
    createdAt: z.date(),
    updatedAt: z.date(),
    createdById: z.number().positive().int()
});

export const patientCreateSchema = patientSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true
})

