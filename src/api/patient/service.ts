import { injectable } from "tsyringe";
import { IPatientService, PatientCreate } from "./interfaces";
import { prisma } from "../../../prisma/prisma.client";
import { PatientEmailAlreadyUsedError } from "./errors";

@injectable()
export class PatientService implements IPatientService{
    public findByEmail = async (email: string) => {
        return await prisma.patient.findUnique({ where: { email } });
    };

    public create = async (payload: PatientCreate) => {
        const hasDuplicatedEmail = await this.findByEmail(payload.email);

        if (hasDuplicatedEmail) {
            throw new PatientEmailAlreadyUsedError();
        }
        
        const patient = await prisma.patient.create({ data: payload });

        return patient;
    };

    public findAll = async () => {
        return await prisma.patient.findMany();
    };
}