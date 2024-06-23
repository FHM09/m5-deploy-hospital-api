import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { IPatientService } from "./interfaces";

@injectable()
export class PatientController {
    constructor(@inject("PatientService") private patientService: IPatientService) {}

    public create = async (req: Request, res: Response) => {
        const patient = await this.patientService.create(req.body);

        return res.status(201).json(patient);
    };

    public findAll = async (req: Request, res: Response) => {
        const patients = await this.patientService.findAll();

        return res.status(200).json(patients);
    };
}