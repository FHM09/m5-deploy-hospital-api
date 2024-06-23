import { z } from "zod"
import { patientCreateSchema, patientSchema } from "./schemas";

export type Patient = z.infer<typeof patientSchema>;
export type PatientCreate = z.infer<typeof patientCreateSchema>;

export interface IPatientService {
    create(payload: PatientCreate): Promise<Patient>;
    findAll(): Promise<Patient[]>;
    findByEmail(email: string): Promise<Patient | null>;
}